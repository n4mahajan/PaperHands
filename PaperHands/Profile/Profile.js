//
//  Profile
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import react from "react"
import React,{useContext,useEffect,useState} from "react"
import { Image, StyleSheet, Text, View ,Button,TextInput, TouchableOpacity, Alert, FlatList, ScrollView, AppState} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"

import { Row, Table, Rows } from 'react-native-table-component';

import SearchBar from "../../components/SearchBar"

export default function Profile () {
	const {user,balance,stocks, transactionHistory}= useContext(AuthContext)

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
		<View style={{flex: 1}}>
			<ScrollView style={{width: "95%", alignSelf: "center", height: "100%", paddingBottom: 10}}>
				<View style={{flex: 1}}>
				<Text style={{alignSelf: "center", fontWeight: "bold", fontSize: 22}}>Hello, {user.name}</Text>
				<View style={styles.header}>
					<Text>Finances</Text>
				</View>
				<Text>Your balance is: ${balance.toFixed(2)}</Text>
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
				<View style={styles.header}>
					<Text>Transaction History</Text>
				</View>
				<View style={styles.tableHeader}>
					<View style={{width: "20%", alignItems: "center"}}>
						<Text>Date</Text>
					</View>
					<Text>Stock</Text>
					<Text>Type</Text>
					<Text>Value</Text>
					<Text>Shares</Text>
				</View>
				<FlatList 
					data={transactionHistory} 
					keyExtractor={(item) => item.date}
					renderItem={({item})=>(
						<react.Fragment>
							<View style={styles.container}>
								<View style={{width: "27%", paddingRight: 20}}>
									<Text style = {styles.date}>{item.date} </Text>
								</View>
								<Text style = {styles.item}>{item.company}</Text>
								<Text style = {styles.item}>{item.type} </Text>
								<Text style = {styles.item}>{item.value}</Text>
								<Text style = {styles.item}>{item.shares}</Text>
							</View>
						</react.Fragment>
				)}/>
				</View>
				
			</ScrollView>
			<TouchableOpacity style={styles.logoutButton} onPress={()=>{
					firebase.auth().signOut()
				}}>
				<Text style={styles.buttonText}>Sign Out</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		borderRadius: 10,
		borderWidth: 0.2,
		width: "45%",
		height: 27,
		alignItems: "center",
		marginBottom: 20,
		backgroundColor: "#00ffa9",
		paddingTop: "1%",
		paddingBottom: "1%",
		marginTop: "5%"
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
		height: 30,
		justifyContent: "center"
	},
	logoutButton: {
		borderRadius: 10,
		borderWidth: 0.2,
		width: "35%",
		alignItems: "center",
		backgroundColor: "black",
		height: 30,
		justifyContent: "center",
		alignSelf: "center",
		bottom: 0,
		marginBottom: "2%",
		marginTop: 10
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
		textAlign: 'center',
	},
	tableHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
		borderColor: "black",
		borderTopWidth: 2,
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
	date: {
		flex: 1,
		marginTop: 10,
		padding: 10,
		fontSize: 14,
		textAlign: 'center',
		width: "130%"
	}
})