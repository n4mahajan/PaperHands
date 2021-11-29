//
//  Portfolio
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import react from "react"
import React,{useEffect,useContext,useState} from "react"
import { Image, StyleSheet, Text, View,FlatList, TouchableHighlight, ScrollView, AppState } from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Feather';
import firebase from "firebase"
import { useIsFocused } from '@react-navigation/native'
 
function Portfolio({navigation}){
	const {user,stocks,balance, lastPortfolioValue}=useContext(AuthContext)
	const [value,setValue]=useState(balance.toFixed(2))
	const [prices, setPrices] = useState({})
	const [total, setTotals] = useState({})
	const [priceChanges, setPriceChanges] = useState({})
	const finnhub = require('finnhub');
	const api_key = finnhub.ApiClient.instance.authentications['api_key'];
	api_key.apiKey = "c54gglaad3ifdcrdm7u0"
	const finnhubClient = new finnhub.DefaultApi()	
	const isFocused = useIsFocused()

	useEffect(() => {
		var thing=balance
		const keys=Object.keys(stocks)
		if (keys.length == 0)
			setValue(balance)
		keys.forEach(async(key)=>{
			 finnhubClient.quote(key, (error, data, response) => {
				var priceChange = data.d.toFixed(2)
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
				setPriceChanges((prevState) => ({
					...prevState,
					[key]: priceChange
				}))
			})
		})   
	}, [isFocused])

	firebase.auth().onAuthStateChanged((user) => {
		if (!user) {
		  update()
		}
	 });

	function update() {
		if (lastPortfolioValue === undefined || lastPortfolioValue === null) {
			firebase.firestore().collection('Users').doc(newUser.user.uid).set({
				lastPortfolioValue: value
			})
		} else {
			firebase.firestore().collection('Users').doc(user.uid).update({
				lastPortfolioValue: value
			})
		}
	};

	const stockOnClick = (stock) => {
		navigation.push("BuySell", {symbol: stock[0], priceChange: priceChanges[stock[0]]})
	}

	return(
		<ScrollView style = {{marginBottom: 30}}>
			<LinearGradient colors={["#4D00FF", "#E400FF"]} style={styles.summary}>
				<View style={styles.leftSubHeading}>
					<Text style={{color: 'white', fontSize: 16}}>Summary</Text>
					<Text style={{color: 'white', fontSize: 22}}>${value}</Text>
				</View>
				<View style={styles.rightSubHeading}>
					<Text style={{color: 'white', fontSize: 16}}>Since Last Time</Text>
					<View style={{flexDirection: "row"}}>
						<Icon size={27} name={ value-lastPortfolioValue >= 0 ? "arrow-up" : "arrow-down"}
							style={value-lastPortfolioValue >= 0 ? styles.valueUp : styles.valueDown}/>
						<Text style={{color: 'white', fontSize: 22}}>${value-lastPortfolioValue}</Text>
					</View>
				</View>
			</LinearGradient>
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
						<TouchableHighlight onPress={() => stockOnClick([item])} underlayColor="white" style={{paddingBottom: 10}}> 
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
		flexDirection: "row",
		justifyContent: "space-between"
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
		borderColor: "black",
		borderTopWidth: 2
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
})

export default Portfolio