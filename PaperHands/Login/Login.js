//
//  Login
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState} from "react"
import { Image, StyleSheet, Text, TextInput, View,Button } from "react-native"
import firebase from "firebase"


export default function Login ({navigation}) {
	const [username,setUsername]=useState(null)
	const [password,setPassword]=useState(null)

	const login=()=>{
		firebase.auth().signInWithEmailAndPassword(username+'@gmail.com',password).then(()=>{
			console.log('here')
		})
	}

	
		return (
			<View
				style={styles.loginView}>
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
						source={require("./../../assets/images/rectangle-2.png")}
						style={styles.rectangleImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 72,
						right: 71,
						top: 306,
						bottom: 75,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.paperhandsText}>PaperHands</Text>
					<Text
						style={styles.theFutureOfTradingText}>The future of trading</Text>
					<Text
						style={styles.welcomeText}>Welcome!</Text>
					
						
					<TextInput placeholder="username" onChangeText={setUsername}/>
					<TextInput placeholder="password" onChangeText={setPassword}/>
					<Button title="login" onPress={login}/>
					<Button title="signup" onPress={()=>{
						navigation.push("SignUp")
					}
					}/>
					<Button title="Quick Login Kiran" onPress={()=>{
						firebase.auth().signInWithEmailAndPassword('kiran@gmail.com','Testing')
					}}/>
				</View>
			</View>
		)
	
}

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
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
	},
	theFutureOfTradingText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 15,
		marginTop: 7,
	},
	welcomeText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 59,
		marginTop: 68,
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
		marginTop: 40,
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
		marginTop: 33,
	},
	loginText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: 34,
	},
	forgotPasswordText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 107,
	},
	signUpText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 17,
	},
})
