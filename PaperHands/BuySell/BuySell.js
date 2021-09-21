//
//  BuySell
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState,useContext} from "react"
import { Image, StyleSheet, Text, View,Button} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"


export default function BuySell () {

	

	const {user}=useContext(AuthContext)
	
	
	return (
	<View>
		<Text>Hello user {user.name}</Text>
		<Text>Your balance is {user.balance}</Text>
		<Text>Buy/Sell Page</Text>
		<Button title="sign out" onPress={()=>{
			
			firebase.auth().signOut()
		}}/>
	</View>
	)
	
}
