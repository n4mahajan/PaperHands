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

import SearchBar from "../../components/SearchBar"

export default function Profile () {
	const {user,balance,stocks}= useContext(AuthContext)


	return (
		<View>
			<Text>Hello user {user.name}</Text>
			<Text>Your balance is {balance.toFixed(2)}</Text>
			<Button title="sign out" onPress={()=>{
				firebase.auth().signOut()
			}}/>
			
		</View>
	)
}
