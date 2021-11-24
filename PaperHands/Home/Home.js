//
//  Home
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useContext, useEffect, useState} from "react"
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View, FlatList, ActivityIndicator,Button,Modal, TouchableOpacity, AppState} from "react-native"
import axios from 'axios'
import CompanyRowItem from "../Home/CompanyRowItem"
import SearchBar from "../../components/SearchBar";
import { Ionicons } from '@expo/vector-icons';
import firebase from '../../firebase/firebase'
import {AuthContext} from '../../context/AuthProvider'

export default function Home({navigation}) {
	const [search, setSearch] = useState('')
	const [results, setResults] = useState(null)
	const [loading,setLoading] = useState(true)
	const nav = useNavigation();
	const[toggle,setToggle]=useState(false)
	const {user,stocks,balance}=useContext(AuthContext)

	useEffect(() => {
		async function fetchData() {
			// const response = await axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c54gglaad3ifdcrdm7u0`)
			// Get list of companies with highest volume of stocks sold today
			const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock/actives?apikey=fc55df44cfed6224751cf95bc49f98ec`)
			let companies = await response.data.mostActiveStock
			//companies = await companies.filter(item => item.type === "Common Stock")
			// Initially sort companies in ascending order by their symbol
			companies.sort(function(a, b){
				if (a.ticker < b.ticker)
					return -1
				return 1
			})
			setResults(companies)
		}
		fetchData()
		setLoading(false)
		
	}, [])



	useEffect(() => {
		nav.setOptions({
			headerRight: () => 
				<TouchableOpacity onPress={()=>{
					setToggle(true)
				}}>
					<Text>Search</Text>
				</TouchableOpacity>
			
		  });
	},[])

	useEffect(() => {
		AppState.addEventListener('change', handleAppStateChange);
	
		return () => {
		  AppState.removeEventListener('change', handleAppStateChange);
		};
	 }, []);
	
	const handleAppStateChange = (nextAppState) => {
	  if (nextAppState === 'inactive') {
		update()
	  }    
	}

	const update=()=>{
		firebase.firestore().collection('Users').doc(user.uid).update({
			lastBalance:balance
		})
	}

	if (loading === true) {
		return (
			<View style={styles.loadingIcon}>
				<ActivityIndicator size="large" color="black"/>
			</View>
		)
	} else {
		return (
			
			<View style={styles.container}>
				<Modal
					animationType="slide"
        			visible={toggle}
					presentationStyle="pageSheet"
				>
					<View style={styles.centeredView}>
					
					<Button title="Close" onPress={()=>{
						setToggle(false)
					}}/>
					<SearchBar navigation={navigation} setToggle={setToggle}/>
					</View>
				</Modal>
				<Text>Your balance has moved by {balance-user.lastBalance} since last time.</Text>
				<FlatList data={results} keyExtractor={(item) => item.ticker} style={styles.rowItem} renderItem={({item})=>(
					<CompanyRowItem symbol={item.ticker} description={item.companyName} price={Number(item.price).toFixed(2)} priceChange={Number(item.changes).toFixed(2)} 
						percentChange={Number(item.changesPercentage).toFixed(2)} navigation={navigation}/>
				)}/>
			</View>
		
		)
	}
};

const styles = StyleSheet.create({
	container: {	
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	rowItem: {
		width: "100%"
	},
	loadingIcon: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	},
	centeredView: {
		justifyContent: "center",
		alignItems: "center",
		marginTop:'30%'
	}
})