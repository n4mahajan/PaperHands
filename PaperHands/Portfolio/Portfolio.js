//
//  Portfolio
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useEffect,useContext,useState} from "react"
import { Image, StyleSheet, Text, View,FlatList } from "react-native"
import { AuthContext } from "../../context/AuthProvider"

 
function Portfolio(){
	const {user,stocks,balance}=useContext(AuthContext)
	const [value,setValue]=useState(balance.toFixed(2))
	const finnhub = require('finnhub');
	const api_key = finnhub.ApiClient.instance.authentications['api_key'];
	api_key.apiKey = "c54gglaad3ifdcrdm7u0"
	const finnhubClient = new finnhub.DefaultApi()
	

	useEffect(() => { 
		var thing=balance
		const keys=Object.keys(stocks)
		keys.forEach(async(key)=>{
			 finnhubClient.quote(key, (error, data, response) => {
				thing+=data.c*stocks[key]
				setValue(thing) 
			})
		})   
	}, [])

	return(
		<View>
			<Text>Portfolio Page</Text>
			<Text>The total value of your portfolio is {value}</Text>
			<Text>Your Stocks</Text>
			<FlatList data={Object.keys(stocks)} renderItem={({item})=>(
				<Text>{item}:{stocks[item]}</Text>
			)}/>
		</View>

	) 
	
}

export default Portfolio
