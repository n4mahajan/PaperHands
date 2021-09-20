//
//  Login
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Login extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
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
					<Text
						style={styles.eMailText}>E-mail</Text>
					<Text
						style={styles.passwordText}>Password</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.loginText}>LOGIN</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 34,
							marginRight: 2,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.forgotPasswordText}>Forgot Password?</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.signUpText}>Sign Up</Text>
					</View>
				</View>
			</View>
	}
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
