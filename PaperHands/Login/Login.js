//
//  Login
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState} from "react"
import { Image, StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from "react-native"
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
				>
				<Image
					source={require("./../../assets/images/login-background.png")}
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
				}}>
				<Text
					style={styles.paperhandsText}>PaperHands</Text>
				<Text
					style={styles.theFutureOfTradingText}>The future of trading</Text>
				<Text
					style={styles.welcomeText}>Welcome!</Text>
				
				<View style={styles.textContainer}>
					<TextInput placeholder="Username" onChangeText={setUsername} textContentType="username" style={styles.textInput} />
					<TextInput placeholder="Password" onChangeText={setPassword} textContentType="password" style={styles.textInput}/>
					<TouchableHighlight onPress={login} style={styles.loginButton}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableHighlight>
					
				</View>
				<View style={styles.extraLinksContainer}>
						<TouchableHighlight underlayColor="transparent">
							<Text style={styles.extraLinksText}>Forgot Password?</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={()=>{navigation.push("SignUp")}} underlayColor="transparent">
							<Text style={styles.extraLinksText}>Sign Up</Text>
						</TouchableHighlight>
				</View>
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
		marginRight: 15,
		marginTop: 7,
	},
	welcomeText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent",
		marginLeft: 59,
		marginTop: 68,
	},
	textContainer: {
		justifyContent: "flex-start",
		alignItems: "center",
		height: "35%"
	},
	textInput: {
		borderWidth: 1,
		backgroundColor: "#E8E8E8",
		borderRadius: 15,
		height: "33%",
		width: "100%",
		marginTop: 15,
		paddingLeft: 15
	},
	loginButton: {
		borderWidth: 1,
		backgroundColor: "black",
		marginTop: 15,
		borderRadius: 15,
		height: "33%",
		width: "100%",
		justifyContent: "center",
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
	extraLinksContainer: {
		marginTop: 55,
		justifyContent: "space-between",
		flexDirection: "row",
		paddingLeft: 7,
		paddingRight: 7,
		paddingBottom: 20
	},
	extraLinksText: {
		color: "gray",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		backgroundColor: "transparent",
	}
})
