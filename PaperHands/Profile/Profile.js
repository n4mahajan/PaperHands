//
//  Profile
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useContext,useEffect,useState} from "react"
import { Image, StyleSheet, Text, View ,Button,TextInput, TouchableOpacity, Alert} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"

import SearchBar from "../../components/SearchBar"

export default function Profile () {
	const {user,balance,stocks}= useContext(AuthContext)

	const [amount, setAmount] = useState()

	async function addFunds() {
		if (isNaN(amount)) {
			Alert.alert("Please enter a valid amount of funds to add", "", [
				{text: "Okay", onPress: () => console.log("Transaction Voided")},
			])
			setAmount();
			return;
		}
		
		const funds = parseFloat(amount)

		await firebase.firestore().collection("Users").doc(user.uid).update({
			balance: balance + funds
		})

		setAmount()
	}

	return (
		<View style={{width: "95%", alignSelf: "center", flex: 1}}>
			<Text style={{alignSelf: "center", fontWeight: "bold", fontSize: 22, marginBottom: "5%"}}>Hello, {user.name}</Text>
			<View style={styles.header}>
				<Text>Finances</Text>
			</View>
			<Text>Your balance is: ${balance}</Text>
			<View style={{flexDirection: "row", marginTop: "3%", marginBottom: "5%"}}>
				<Text style={{marginRight: "3%", marginTop: "2%"}}>Add funds:</Text>
				<TextInput placeholder="Amount" value={amount} onChangeText={setAmount} style={styles.textInput} keyboardType="numeric"/>
			</View>
			<TouchableOpacity style={styles.button} onPress={() => 
				Alert.alert("Are you sure you want to add funds?", "", [
					{text: "Confirm", onPress: () => {
						addFunds()
					}},
					{text: "Deny", onPress: () => console.log("Transaction Voided")},
				])}   >
				<Text style={styles.buttonText}>Add</Text>
			</TouchableOpacity>
			<Button title="sign out" onPress={()=>{
				firebase.auth().signOut()
			}}/>
			
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		borderRadius: 10,
		borderWidth: 0.2,
		width: "35%",
		alignItems: "center",
		marginBottom: "5%",
		backgroundColor: "#00ffa9",
		paddingTop: "1%",
		paddingBottom: "1%"
	},
	textInput: {
		borderColor: "#000000",
		borderWidth: 1,
		width: "75%",
		height: "140%",
		paddingLeft: "3%"
	},
	button: {
		borderRadius: 10,
		borderWidth: 0.2,
		width: "35%",
		alignItems: "center",
		backgroundColor: "black",
		marginLeft: "40%",
		height: "4%",
		justifyContent: "center"
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
		textAlign: 'center',
	}
})