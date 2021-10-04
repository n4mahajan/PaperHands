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
import Chart from "./Chart";
import moment from "moment";

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
	const [balance, setBalance] = useState()
	const [stockAmount, setStocks] = useState()
	const [symbol, setSymbol] = useState(route.params.symbol)
	const [hourData, setHourData] = useState([])
	const [dayData, setDayData] = useState([])
	const [monthData, setMonthData] = useState([])
	const [yearData, setYearData] = useState([])

	const finnhub = require('finnhub');

	const api_key = finnhub.ApiClient.instance.authentications['api_key'];
	api_key.apiKey = "btnth1n48v6p0j27i8k0"
	const finnhubClient = new finnhub.DefaultApi()

	const now = moment().unix()
	const hour = moment().subtract(1, "hours").unix()
	const day = moment().subtract(1, "days").unix()
	const month = moment().subtract(1, "months").unix()
	const year = moment().subtract(1, "years").unix()


	useEffect(() => {
		finnhubClient.stockCandles(symbol, 1, hour, now, (error, data, response) => {
			setHourData(generateData(data.t, data.c))
		});
		finnhubClient.stockCandles(symbol, 60, day, now, (error, data, response) => {
			setDayData(generateData(data.t, data.c))
		});
		finnhubClient.stockCandles(symbol, "D", month, now, (error, data, response) => {
			setMonthData(generateData(data.t, data.c))
		});
		finnhubClient.stockCandles(symbol, "W", year, now, (error, data, response) => {
			setYearData(generateData(data.t, data.c))
		});
	}, [])

	// useEffect(()=>{
	// 	async function fetchData() {
	// 		const pricing = await axios.get(`https://finnhub.io/api/v1/stock/candle?token=btnth1n48v6p0j27i8k0&symbol=${symbol}&resolution=D&from=${hour}&to=${now}`)
	// 		const info = await pricing.data
	// 		console.log(info)
	// 		setYAxis(info.c) 
	// 		setXAxis(info.t)
	// 	}
	// 	fetchData()
	// }, [])

	useEffect(() => {
		finnhubClient.quote(symbol, (error, data, response) => {
			// console.log(data)
			const updatedPrice = data.c
			setPrice(updatedPrice)
		})
	}, [])

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
			{ yearData ? (
			<Chart 
			hourData = {hourData}
			dayData = {dayData}
			monthData = {monthData}
			yearData = {yearData}
			symbol = {symbol}
			/>) : null
			}
		</View>
		<View style = {styles.input}>
			<Text>
				Enter amount to buy/sell:	
			</Text>
			<TextInput placeholder="Amount" onChangeText={setAmount}/>
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
				{text: "Confirm", onPress: () => console.log("Approved Transaction")},
				{text: "Deny", onPress: () => console.log("Transaction Voided")},
			])}   >
			<View style={styles.button}>
				<Text style={styles.buttonText}> Buy</Text>
			</View>
		</TouchableOpacity>

		<TouchableOpacity 			
			onPress={() => 
			Alert.alert("Are you sure you want to sell?", "", [
				{text: "Confirm", onPress: () => console.log("Approved Transaction")},
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
