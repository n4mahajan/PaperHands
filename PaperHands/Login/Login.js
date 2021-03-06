//
//  Login
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState} from "react"
import { Image, StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Alert, KeyboardAvoidingView } from "react-native"
import firebase from "firebase"

export default function Login ({navigation}) {
	const [username,setUsername]=useState(null)
	const [password,setPassword]=useState(null)

	const login=()=>{
		firebase.auth().signInWithEmailAndPassword(username+'@gmail.com',password).then(()=>{
			console.log('her')
		}).catch((error)=>{
			Alert.alert("Login failed: your username and/or password was incorrect")
		})
	}

	
	return (
		<KeyboardAvoidingView
      		behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.loginView}>
			<View
				pointerEvents="box-none"
				>
				<Image
					source={require("./../../assets/images/login-background.png")}
					style={styles.rectangleImage}/>
			</View>
			<View
				pointerEvents="box-none"
				style={{
					position: "relative",
					height: "100%",
					bottom: "77%",
				}}>
				<View style={styles.titleContainer}>
					<Text
						style={styles.paperhandsText}>PaperHands</Text>
					<Text
						style={styles.theFutureOfTradingText}>The future of trading</Text>
				</View>
				
				<View style={styles.loginContainer}>
					<Text style={styles.welcomeText}>Welcome!</Text>
					<View style={styles.textContainer}>
						<TextInput placeholder="Username" onChangeText={setUsername} textContentType="username" style={styles.textInput} />
						<TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} textContentType="password" style={styles.textInput}/>
						<TouchableHighlight onPress={login} style={styles.loginButton}>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableHighlight>
						<View style={styles.extraLinksContainer}>
							<TouchableHighlight onPress={()=>{navigation.push("SignUp")}} underlayColor="transparent">
								<Text style={styles.extraLinksText}>Sign Up</Text>
							</TouchableHighlight>
						</View>
					</View>
					
				</View>
			</View>
		</KeyboardAvoidingView>
	)
	
}

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		position: "relative",
		flex: 1
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: "100%",
		position: "relative"
	},
	paperhandsText: {
		color: "black",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	theFutureOfTradingText: {
		color: "black",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginRight: "5%",
		marginTop: "2%",
	},
	welcomeText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	textContainer: {
		justifyContent: "flex-start",
		height: "40%",
	},
	textInput: {
		borderWidth: 1,
		backgroundColor: "#E8E8E8",
		borderRadius: 15,
		height: "20%",
		width: "100%",
		marginTop: "5%",
		paddingLeft: "6%"
	},
	loginButton: {
		borderWidth: 1,
		backgroundColor: "black",
		marginTop: "5%",
		borderRadius: 15,
		height: "20%",
		width: "100%",
		justifyContent: "center",
		marginBottom: "2%"
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
	extraLinksContainer: {
		justifyContent: "flex-end",
		flexDirection: "row",
		paddingLeft: "3%",
		paddingRight: "3%",
	},
	extraLinksText: {
		color: "gray",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent"
	},
	titleContainer: {
		top: "15%"
	},
	loginContainer: {
		top: "25%",
		height: "100%",
		width: "80%",
		alignSelf: "center",
		flex: 1
	}
})
