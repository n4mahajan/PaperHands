//
//  Home
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Home extends React.Component {

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
				style={styles.homeView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: -7,
						top: 0,
						bottom: 0,
					}}>
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
							source={require("./../../assets/images/rectangle-4.png")}
							style={styles.rectangleImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 21,
							right: 111,
							top: 45,
							bottom: 108,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.settingsText}>SETTINGS</Text>
						<Text
							style={styles.financesText}>Finances</Text>
						<Text
							style={styles.currentFunds1293Text}>Current Funds: $1293.50</Text>
						<Text
							style={styles.addFundsText}>Add Funds:</Text>
						<Text
							style={styles.addText}>Add</Text>
						<Text
							style={styles.accountText}>Account</Text>
						<Text
							style={styles.changeUsernameText}>Change Username</Text>
						<Text
							style={styles.changePasswordText}>Change Password</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.accessibilityText}>Accessibility</Text>
						<Text
							style={styles.darkModeText}>Dark Mode</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 19,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.fontSizeText}>Font Size:</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.mediumText}>Medium</Text>
						</View>
					</View>
				</View>
				<Text
					style={styles.lightModeText}>Light Mode</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	homeView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 812,
	},
	settingsText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 44,
	},
	financesText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 35,
		marginTop: 68,
	},
	currentFunds1293Text: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 55,
	},
	addFundsText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 50,
	},
	addText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 21,
		marginTop: 33,
	},
	accountText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 35,
		marginTop: 68,
	},
	changeUsernameText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 40,
	},
	changePasswordText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 25,
	},
	accessibilityText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 24,
		marginBottom: 22,
	},
	darkModeText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 19,
	},
	fontSizeText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	mediumText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	lightModeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		bottom: 146,
	},
})
