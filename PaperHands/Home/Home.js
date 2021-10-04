//
//  Home
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useContext, useEffect, useState} from "react"
import { Image, StyleSheet, Text, View, FlatList, ScrollView, ActivityIndicator} from "react-native"
import axios from 'axios'
import CompanyRowItem from "../Home/CompanyRowItem"

export default function Home({navigation}) {
	const [search, setSearch] = useState('')
	const [results, setResults] = useState(null)
	const [loading,setLoading]=useState(true)

	useEffect(async() => {

		async function fetchData() {
			const response = await axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c54gglaad3ifdcrdm7u0`)
			let companies = await response.data
			companies = companies.splice(0, 30)
			companies = companies.filter(item => item.type === "Common Stock")
			// Initially sort companies in ascending order by their symbol
			companies.sort(function(a, b){
				if (a.symbol < b.symbol)
					return -1
				return 1
			})
			setResults(companies)
		}
		await fetchData()
		setLoading(false)
		
	}, [])

	if (loading==true) {
		return (
			<View style={styles.loadingIcon}>
				<ActivityIndicator size="large" color="black"/>
			</View>
		)
	} else {
		return (
			<View style={styles.container}>
				<FlatList data={results} keyExtractor={(item) => item.figi} style={styles.rowItem} renderItem={({item})=>(
					<CompanyRowItem symbol={item.symbol} description={item.description} navigation={navigation}/>
				)}/>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {	
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	rowItem: {
		width: "100%"
	},
	loadingIcon: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	}
})