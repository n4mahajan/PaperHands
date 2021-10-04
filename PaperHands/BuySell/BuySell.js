//
//  BuySell
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useState,useContext} from "react"
import { Image, StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"
import { Directions } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import Chart from "./Chart"

export default function BuySell ({navigation, route}) {
	const [price, setPrice] = useState(0)
	const [amount, setAmount] = useState()
	const [yAxis, setYAxis] = useState()
	const [xAxis, setXAxis] = useState()
	const {user,balance,stocks}=useContext(AuthContext)
	const [stockAmount, setStocks] = useState()
	const [symbol, setSymbol] = useState(route.params.symbol)

	const finnhub = require('finnhub');

	const api_key = finnhub.ApiClient.instance.authentications['api_key'];
	api_key.apiKey = "btnth1n48v6p0j27i8k0"
	const finnhubClient = new finnhub.DefaultApi()
	
	useEffect(()=>{
		async function fetchData() {
			const pricing = await axios.get(`https://finnhub.io/api/v1/stock/candle?token=btnth1n48v6p0j27i8k0&symbol=${symbol}&resolution=D&from=1590988249&to=1591852249`)
			const info = await pricing.data
			console.log(info)
			setYAxis(info.t)
			setXAxis(info.c)
		}
		fetchData()

	}, [])

	useEffect(() => {
		finnhubClient.quote(symbol, (error, data, response) => {
			console.log(data)
			const updatedPrice = data.c
			setPrice(updatedPrice)
		})
	}, [])

	const buy=async()=>{
		const numberAmount=parseInt(amount)
		const totalCost= numberAmount*price
		if (balance>=totalCost){
			if(stocks.hasOwnProperty(symbol)){
				stocks[symbol]+=numberAmount
			}else{
				stocks[symbol]=numberAmount
			}
			await firebase.firestore().collection("Users").doc(user.uid).update({
				stocks:stocks,
				balance:balance-totalCost
			})
		}
		console.log(user)

	}

	const sell=async()=>{
		const numberAmount=parseInt(amount)
		const totalGain= numberAmount*price
		if(stocks.hasOwnProperty(symbol)){
			if(stocks[symbol]>numberAmount){
				stocks[symbol]-=numberAmount
				if (stocks[symbol]<=0){
					delete stocks[symbol]
				}
				await firebase.firestore().collection("Users").doc(user.uid).update({
					stocks:stocks,
					balance:balance+totalGain
				})
			}else{
				Alert.alert('You dont own enough of this stock')
			}

		}else{
			Alert.alert('You dont own any shares of this stock')
		}
	}

	return (
	<View style = {{
		flex: 1,
		background: "blue",
	}}>
		<View style = {styles.container}>
			<Text >
				{symbol} Price: ${price}
			</Text>	
		</View>
		<View>
			<Chart 
			xAxis = {xAxis}
			yAxis = {yAxis}
			/>
		</View>
		<View style = {styles.input}>
			<Text>
				Enter amount to buy/sell:	
			</Text>
			<TextInput placeholder="Amount" onChangeText={setAmount} keyboardType="numeric"/>
		</View>
		
		<View style = {{
			flex: 1,
			flexDirection: "row",
			alignContent: "center",
			justifyContent: "center",
		}}>
		<TouchableOpacity 			
			onPress={() => 
			Alert.alert("Are you sure you want to buy?", "", [
				{text: "Confirm", onPress: () => buy()},
				{text: "Deny", onPress: () => console.log("Transaction Voided")},
			])}   >
			<View style={styles.button}>
				<Text style={styles.buttonText}> Buy</Text>
			</View>
		</TouchableOpacity>

		<TouchableOpacity 			
			onPress={() => 
			Alert.alert("Are you sure you want to sell?", "", [
				{text: "Confirm", onPress: () => sell()},
				{text: "Deny", onPress: () => console.log("Transaction Voided")},
			])}   >
			<View style={styles.button}>
				<Text style={styles.buttonText}> Sell</Text>
			</View>
		</TouchableOpacity>

		</View>
	</View>
	)
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		top: 50,
	},
	input: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		borderRadius: 8,
		paddingVertical: 14,
		paddingHorizontal: 10,
		backgroundColor: 'black',
		width: 100,
		height: 50,
	  },
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});
