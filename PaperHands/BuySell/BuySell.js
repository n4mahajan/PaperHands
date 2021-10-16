//
//  BuySell
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useState,useContext, useEffect} from "react"
import { Image, StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity,
	TouchableWithoutFeedback,Keyboard} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"
import { Directions } from "react-native-gesture-handler";
import axios from "axios";
import Chart from "./Chart";
import moment from "moment";
import {useNavigation} from '@react-navigation/native';

export default function BuySell ({navigation, route}) {
	const generateData = (xValues, yValues) => {
		const currentData = []
		for (var i = 0; i < yValues.length; i++){
			let temp = { x:xValues[i], y:yValues[i]}
			currentData.push(temp)
		}
		return currentData
	}

	const [price, setPrice] = useState(0)
	const [amount, setAmount] = useState()
	const [stockAmount, setStocks] = useState()
	const [symbol, setSymbol] = useState(route.params.symbol)
	const [hourData, setHourData] = useState([])
	const [dayData, setDayData] = useState([])
	const [monthData, setMonthData] = useState([])
	const [yearData, setYearData] = useState([])
	const [chartReady, setChart] = useState(true)
	const {user,balance,stocks}=useContext(AuthContext)
	const pulledNavigation = useNavigation();

	const finnhub = require('finnhub');

	const api_key = finnhub.ApiClient.instance.authentications['api_key'];
	api_key.apiKey = "c54gglaad3ifdcrdm7u0"
	const finnhubClient = new finnhub.DefaultApi()
	const now = moment().unix()
	const hour = moment().subtract(1, "hours").unix()
	const day = moment().subtract(1, "days").unix()
	const month = moment().subtract(1, "months").unix()
	const year = moment().subtract(1, "years").unix()

	useEffect(() => {
		pulledNavigation.setOptions({
			title: symbol,
			headerTitleStyle: {marginRight: 56, marginLeft: 56},
		  });

		finnhubClient.quote(symbol, (error, data, response) => {
			// console.log(data)
			const updatedPrice = data.c
			setPrice(updatedPrice)
		})

		async function getData() {
			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=1&from=${hour}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setHourData(generateData(response.data.t, response.data.c))
			}).catch(err => {})
			
			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=60&from=${day}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setDayData(generateData(response.data.t, response.data.c))
			}).catch(err => {
				console.log(err)
			})

			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${month}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setMonthData(generateData(response.data.t, response.data.c))
			}).catch(err => {
				console.log(err)
			})

			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=W&from=${year}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setYearData(generateData(response.data.t, response.data.c))
			}).catch(err => {
				console.log(err)
			})
		}
		getData()
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
	}

	const sell=async()=>{
		const numberAmount=parseInt(amount)
		const totalGain= numberAmount*price
		if(stocks.hasOwnProperty(symbol)){
			if(stocks[symbol]>=numberAmount){
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
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	<View style = {{
		flex: 1,
		background: "blue",
	}}>
		
		
		<View style = {styles.priceContainer}>
			<Text >
				{symbol} Price: ${price}
			</Text>	
		</View>
		<View>
			<Chart 
				hourData = {hourData}
				dayData = {dayData}
				monthData = {monthData}
				yearData = {yearData}
				symbol = {symbol}
			/>
		</View>
		
		<View style = {styles.input}>
			<Text>
				Enter amount of shares:	
			</Text>
			<TextInput placeholder="Amount" onChangeText={setAmount} style={styles.textInput} keyboardType="numeric"/>
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
				{text: "Confirm", onPress: () => {
					buy()
					navigation.goBack()
				}},
				{text: "Deny", onPress: () => console.log("Transaction Voided")},
			])}   >
			<View style={styles.button}>
				<Text style={styles.buttonText}> Buy</Text>
			</View>
		</TouchableOpacity>

		<TouchableOpacity 			
			onPress={() => 
			Alert.alert("Are you sure you want to sell?", "", [
				{text: "Confirm", onPress: () => {
					sell()
					navigation.goBack()
				}},
				{text: "Deny", onPress: () => console.log("Transaction Voided")},
			])}   >
			<View style={styles.button}>
				<Text style={styles.buttonText}> Sell</Text>
			</View>
		</TouchableOpacity>
		
		

		</View>
		
		
		
	</View>
	</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create( {
	priceContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		top: 25,
	},
	input: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "5%",
		marginTop: "15%"
	},
	button: {
		borderRadius: 8,
		paddingVertical: 14,
		paddingHorizontal: 10,
		backgroundColor: 'black',
		width: 100,
		height: 50
	  },
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center'
	},
	textInput: {
		height: 40,
		borderColor: "#000000",
		borderBottomWidth: 1,
		marginBottom: 36
	  },
	  inner: {
		padding: 24,
		flex: 1,
		justifyContent: "space-around"
	  },
	  
	  
});
