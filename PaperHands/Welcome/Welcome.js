//
//  Welcome
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Welcome extends React.Component {

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
				style={styles.welcome}>
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
						source={require("./../../assets/images/rectangle-3.png")}
						style={styles.rectangleImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						right: 75,
						width: 220,
						top: 90,
						bottom: 66,
						alignItems: "flex-end",
					}}>
					<Text
						style={styles.practiceInvestingText}>Practice investing</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.startText}>START</Text>
				</View>
				<Text
					style={styles.forYourFutureText}>for your future!</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	welcome: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 812,
	},
	practiceInvestingText: {
		color: "black",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	startText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 4,
	},
	forYourFutureText: {
		color: "black",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 80,
		top: 123,
	},
})
