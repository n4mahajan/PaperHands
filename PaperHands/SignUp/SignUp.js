//
//  SignUp
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState,useContext} from "react"
import { Image, StyleSheet, Text, TextInput, View,Button } from "react-native"
import firebase from "firebase"
import { AuthContext } from "../../context/AuthProvider"


export default function SignUp(){
	const [username,setUsername]=useState(null)
	const [password,setPassword]=useState(null)
	const [name,setName]=useState(null)
	const [balance,setBalance]=useState(100000)

	const {user}=useContext(AuthContext) 

	const createUser=async()=>{
		let newUser=await firebase.auth().createUserWithEmailAndPassword(username+'@gmail.com',password)
		firebase.firestore().collection('Users').doc(newUser.user.uid).set({
				name,
				balance,
				stocks:{}
		})
			
		
	} 

	

	
	
		return (
			<View
				style={styles.signUpView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Image
						source={require("./../../assets/images/rectangle.png")}
						style={styles.rectangleImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 72,
						right: 70,
						top: 306,
						bottom: 75,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.paperhandsText}>PaperHands</Text>
					<Text
						style={styles.theFutureOfTradingText}>The future of trading</Text>
					<View
						style={{
							flex: 1,
						}}/>
				
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 34,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
					
						
						<View
							style={{
								flex: 1,
							}}/>
					</View>
					
				</View>
				<TextInput placeholder="username" onChangeText={setUsername}/>
				<TextInput placeholder="password" onChangeText={setPassword}/>
				<TextInput placeholder="name" onChangeText={setName}/>
				<Button title="create User with a starting balance of 100,000" onPress={createUser}/>

			</View>
		)
	
}

const styles = StyleSheet.create({
	signUpView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 812,
	},
	paperhandsText: {
		color: "black",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 1,
	},
	theFutureOfTradingText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 16,
		marginTop: 7,
	},
	createAFreeAccounText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 70,
	},
	eMailText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 38,
		marginLeft: 14,
		marginTop: 34,
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 58,
		marginLeft: 14,
		marginTop: 31,
	},
	signUpText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: 35,
	},
	forgotPasswordText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 107,
	},
	loginText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 34,
	},
})
