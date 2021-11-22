//
//  Portfolio
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import react from "react"
import React,{useEffect,useContext,useState} from "react"
import { Image, StyleSheet, Text, View,FlatList, TouchableHighlight, ScrollView } from "react-native"
import { AuthContext } from "../../context/AuthProvider"

 
function Portfolio({navigation}){
	const {user,stocks,balance}=useContext(AuthContext)
	const [value,setValue]=useState(balance.toFixed(2))
	const [prices, setPrices] = useState({})
	const [total, setTotals] = useState({})
	const finnhub = require('finnhub');
	const api_key = finnhub.ApiClient.instance.authentications['api_key'];
	api_key.apiKey = "c54gglaad3ifdcrdm7u0"
	const finnhubClient = new finnhub.DefaultApi()	

	useEffect(() => { 
		var thing=balance
		const keys=Object.keys(stocks)
		keys.forEach(async(key)=>{
			 finnhubClient.quote(key, (error, data, response) => {
				var price = data.c.toFixed(2)
				var total = (data.c*stocks[key]).toFixed(2)
				thing += parseFloat(total)
				setPrices((prevState) => ({
					...prevState,
					[key]: price
				}))
				setTotals((prevState) => ({
					...prevState,
					[key]: total
				}))
				setValue(thing.toFixed(2)) 
			})
		})   
	}, [])

	stockOnClick = (stock) => {
		navigation.push("BuySell", {symbol: stock[0]})
	}

	return(
		<ScrollView style = {{marginBottom: 30}}>
			<View style={styles.summary}>
				<Text style = {{textAlign: 'center'}}> Portfolio value: ${value}</Text>
			</View>
			<View style ={styles.containerHeading}>
				<Text style={styles.item}> Stock </Text>
				<Text style={styles.item}> Price </Text>
				<Text style={styles.item}> Shares </Text>
				<Text style={styles.totalValue}> Total Value </Text>
			</View>
				<FlatList 
				data={Object.keys(stocks)} 
				renderItem={({item})=>(
					<react.Fragment>
						<TouchableHighlight onPress={() => stockOnClick([item])} underlayColor="white"> 
							<View style={styles.container}>
								<Text style = {styles.item}>{item} </Text>
								<Text style = {styles.item}>{prices[item]}</Text>
								<Text style = {styles.item}>{stocks[item]} </Text>
								<Text style = {styles.totalValue}>{total[item]}</Text>
							</View>
						</TouchableHighlight>
					</react.Fragment>
				)}/>
		</ScrollView>
	) 
}

const styles = StyleSheet.create({
	summary: {
		marginRight: 40,
		marginLeft: 40,
		marginTop: 10,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: '#00ffa9',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
	},
	containerHeading: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 10,
		marginHorizontal: 10,
		borderColor: "black",
		borderWidth: 2,
	},
	item: {
		flex: 1,
		marginTop: 10,
		padding: 10,
		fontSize: 14,
		textAlign: 'center',
	},
	totalValue: {
		flex: 1.5,
		marginTop: 10,
		padding: 5,
		fontSize: 14,
		textAlign: 'center',
	}
})

export default Portfolio
