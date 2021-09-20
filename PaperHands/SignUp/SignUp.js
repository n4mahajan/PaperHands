//
//  SignUp
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class SignUp extends React.Component {

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
					<Text
						style={styles.createAFreeAccounText}>Create a free account</Text>
					<Text
						style={styles.eMailText}>E-mail</Text>
					<Text
						style={styles.passwordText}>Password</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.signUpText}>SIGN UP</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 34,
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
							style={styles.loginText}>Login</Text>
					</View>
				</View>
			</View>
	}
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
