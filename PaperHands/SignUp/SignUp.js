//
//  SignUp
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState,useContext} from "react"
import { Image, StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Alert} from "react-native"
import firebase from "firebase"
import { AuthContext } from "../../context/AuthProvider"


export default function SignUp({navigation}) {
	const [username,setUsername]=useState(null)
	const [password,setPassword]=useState(null)
	const [name,setName]=useState(null)
	const [balance,setBalance]=useState(100000)

	const {user}=useContext(AuthContext) 

	const createUser=async()=>{
		let newUser=await firebase.auth().createUserWithEmailAndPassword(username+'@gmail.com',password).catch((error)=>{
			Alert.alert("There was an error while creaitng your account")
		})
		firebase.firestore().collection('Users').doc(newUser.user.uid).set({
				name,
				balance,
				stocks:{}
		})
			
		
	} 
	// Trying to get this to work for the keyboard input
	// https://medium.com/@nickyang0501/keyboardavoidingview-not-working-properly-c413c0a200d4
	return (
		<View
			style={styles.signUpView}>
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
					bottom: "77%"
				}}>
				<View style={styles.titleContainer}>
					<Text
						style={styles.paperhandsText}>PaperHands</Text>
					<Text
						style={styles.theFutureOfTradingText}>The future of trading</Text>
				</View>
				
				<View style={styles.signUpContainer}>
					<Text style={styles.welcomeText}>Create a Free Account</Text>
					<View style={styles.textContainer}>
						<TextInput placeholder="Username" onChangeText={setUsername} textContentType="username" style={styles.textInput} />
						<TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} textContentType="password" style={styles.textInput}/>
						<TouchableHighlight onPress={createUser} style={styles.signUpButton}>
							<Text style={styles.buttonText}>Sign Up</Text>
						</TouchableHighlight>
						<View style={styles.extraLinksContainer}>
							<TouchableHighlight underlayColor="transparent">
								<Text style={styles.extraLinksText}>Forgot Password?</Text>
							</TouchableHighlight>
							<TouchableHighlight onPress={()=>{navigation.push("Login")}} underlayColor="transparent">
								<Text style={styles.extraLinksText}>Login</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
	
}

const styles = StyleSheet.create({
	signUpView: {
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
	signUpButton: {
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
		justifyContent: "space-between",
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
	signUpContainer: {
		top: "25%",
		height: "100%",
		width: "80%",
		alignSelf: "center",
		flex: 1
	}
})
