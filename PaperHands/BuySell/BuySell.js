//
//  BuySell
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useState, useEffect, useContext} from "react"
import { Image, StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity,
	TouchableWithoutFeedback,Keyboard} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"
import { Directions } from "react-native-gesture-handler";
import axios from "axios";
import Chart from "./Chart";
import moment from "moment";
import {useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Feather';

export default function BuySell ({navigation, route}) {
	const generateData = (xValues, yValues) => {
		const currentData = []
		for (var i = 0; i < yValues.length; i++){
			let temp = { x:(xValues[i].toFixed(2)), y:(yValues[i].toFixed(2))}
			currentData.push(temp)
		}
		return currentData
	}

	const [price, setPrice] = useState(0)
	const [amount, setAmount] = useState()
	const [stockAmount, setStocks] = useState()
	const [symbol, setSymbol] = useState(route.params.symbol)
	const [priceChange, setPriceChange] = useState(route.params.priceChange)
	const [hourData, setHourData] = useState([])
	const [dayData, setDayData] = useState([])
	const [monthData, setMonthData] = useState([])
	const [yearData, setYearData] = useState([])
	const [chartReady, setChart] = useState(true)
	const {user,balance,stocks, transactionHistory}=useContext(AuthContext)
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
		});

		async function getData() {
			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=1&from=${hour}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setHourData(generateData(response.data.t, response.data.c));
			}).catch(err => {
				console.log(err);
			})
			
			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=60&from=${day}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setDayData(generateData(response.data.t, response.data.c));
			}).catch(err => {
				console.log(err);
			})

			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${month}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setMonthData(generateData(response.data.t, response.data.c));
			}).catch(err => {
				console.log(err);
			})

			await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=W&from=${year}&to=${now}&token=c54gglaad3ifdcrdm7u0`).then((response) => {
				setYearData(generateData(response.data.t, response.data.c));
			}).catch(err => {
				console.log(err);
			})
		}
		getData()
	}, [])

	const buy=async()=>{
		
		const numberAmount=parseInt(amount)
		const totalCost= numberAmount*price
		console.log(totalCost)
		if (balance>=totalCost){
			if(stocks.hasOwnProperty(symbol)){
				stocks[symbol]+=numberAmount
			}else{
				stocks[symbol]=numberAmount
			}
			var newTransactionHistory = transactionHistory
			newTransactionHistory.push({date: new Date(Date.now()).toLocaleString(), company: symbol, type: "Buy", value: totalCost, shares: numberAmount})
			await firebase.firestore().collection("Users").doc(user.uid).update({
				stocks:stocks,
				balance:balance-totalCost,
				transactionHistory: newTransactionHistory
			})
			navigation.goBack()
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
				var newTransactionHistory = transactionHistory
				newTransactionHistory.push({date: new Date(Date.now()).toLocaleString(), company: symbol, type: "Sell", value: totalGain, shares: numberAmount})
				await firebase.firestore().collection("Users").doc(user.uid).update({
					stocks:stocks,
					balance:balance+totalGain,
					transactionHistory: newTransactionHistory
				})
				navigation.goBack()
			}else{
				Alert.alert('You don\'t own enough of this stock')
			}

		}else{
			Alert.alert('You don\'t own any shares of this stock')
		}
	}

	var shares = 0;
	if (stocks[symbol]) {
		shares = stocks[symbol];
	}

	var currentPrice = parseFloat(price);
	currentPrice = currentPrice.toFixed(2);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	<View style = {{
		flex: 1,
		background: "blue",
	}}>
		
		
		<LinearGradient colors={["#4D00FF", "#E400FF"]} style = {styles.priceContainer}>
			<View style={styles.leftSubHeading}>
				<Text style={{color: 'white', fontSize: 16}}>Summary</Text>
				<Text style={{color: 'white', fontSize: 22}}>${price}</Text>
			</View>
			<View style={styles.rightSubHeading}>
				<Text style={{color: 'white', fontSize: 16}}>Today's Change</Text>
				<View style={{flexDirection: "row"}}>
					<Icon size={27} name={ priceChange >=0 ? "arrow-up" : "arrow-down"}
						style={priceChange >= 0 ? styles.valueUp : styles.valueDown}/>
					<Text style={{color: 'white', fontSize: 22}}>${priceChange}</Text>
				</View>
			</View>
		</LinearGradient>
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
			<Text style = {{textAlign:'center'}}>
				Shares owned: {shares} {"\n"}
				Enter amount of shares to buy/sell:	
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
		marginRight: 40,
		marginLeft: 40,
		marginTop: 10,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: '#00ffa9',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
		flexDirection: "row",
		justifyContent: "space-between"
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
	  leftSubHeading: {
		alignItems: "flex-start",
		paddingLeft: 20
	},
	rightSubHeading: {
		alignItems: "flex-end",
		paddingRight: 20
	},
	valueUp: {
		color: "#00ffa9"
	},
	valueDown: {
		color: "#E62124"
	}
});
