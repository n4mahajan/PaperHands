//
//  SignUp
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState,useContext} from "react"
import { Image, StyleSheet, Text, TextInput, View, Button, TouchableHighlight} from "react-native"
import firebase from "firebase"
import { AuthContext } from "../../context/AuthProvider"


export default function SignUp({navigation}) {
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
					style={styles.welcomeText}>Create a Free Account</Text>
				
				<View style={styles.textContainer}>
					<TextInput placeholder="Username" onChangeText={setUsername} textContentType="username" style={styles.textInput} />
					<TextInput placeholder="Password" onChangeText={setPassword} textContentType="password" style={styles.textInput}/>
					<TouchableHighlight onPress={createUser} style={styles.signUpButton}>
						<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableHighlight>
					
				</View>
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
	)
	
}

const styles = StyleSheet.create({
	signUpView: {
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
		marginTop: 68,
		paddingLeft: 10,
		width: "100%",
		alignSelf: "center"
	},
	textContainer: {
		justifyContent: "flex-start",
		alignItems: "center",
		height: "35%",
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
	signUpButton: {
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