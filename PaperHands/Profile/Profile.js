//
//  Profile
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useContext,useEffect,useState} from "react"
import { Image, StyleSheet, Text, View ,Button,TextInput,FlatList} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"
import axios from "axios"


export default function Profile () {
	const {user}= useContext(AuthContext)

	const [search, setSearch]=useState('')
	const [results, setResults]=useState([])

	useEffect(()=>{

		async function fetchData() {
			if (search.length > 0){
				const response = await axios.get(`https://finnhub.io/api/v1/search?q=${search}&token=btnth1n48v6p0j27i8k0`)
				const results = await response.data
				console.log(results.result)
				setResults(results.result.slice(0, 5))
			} else{
				setResults([])
			}
		}
		fetchData()
		
	},[search])


	return (
		<View>
			<Text>Hello user {user.name}</Text>
			<Text>Your balance is {user.balance}</Text>
			<Button title="sign out" onPress={()=>{
				firebase.auth().signOut()
			}}/>
			<View>
				<Text>Example Search Later to be put in to Buy Sell Tab</Text>
				<TextInput placeholder="search stock" onChangeText={setSearch}/>
				<FlatList data={results} renderItem={({item})=>(
					<Text>{item.symbol}:{item.description}</Text>

				)}/>
			</View> 
		</View>
	)
}
