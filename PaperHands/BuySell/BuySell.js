//
//  BuySell
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useState,useContext} from "react"
import { Image, StyleSheet, Text, View,Button} from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import firebase from "firebase"

// If more info about company is needed, use https://finnhub.io/docs/api/company-profile and make an API call using company symbol
export default function BuySell (props) {	
	const {} = props;
	
	return (
	<View>
		<Text>Buy/Sell Page</Text>
	</View>
	)
	
}
