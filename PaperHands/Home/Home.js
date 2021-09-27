//
//  Home
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useContext, useEffect, useState} from "react"
import { Image, StyleSheet, Text, View, FlatList, ScrollView} from "react-native"
import axios from 'axios'
import CompanyRowItem from "../Home/CompanyRowItem"

export default function Home({navigation}) {
	const [search, setSearch] = useState('')
	const [results, setResults] = useState(null)

	useEffect(() => {

		async function fetchData() {
			const response = await axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=btnth1n48v6p0j27i8k0`)
			const companies = await response.data
			// Initially sort companies in ascending order by their symbol
			companies.sort(function(a, b){
				if (a.symbol < b.symbol)
					return -1
				return 1
			})
			console.log(companies)
			setResults(companies)
		}
		fetchData()
		
	}, [])

	return (
		<View style={styles.container}>
			<FlatList data={results} keyExtractor={(item) => item.figi} style={styles.rowItem} renderItem={({item})=>(
				<CompanyRowItem symbol={item.symbol} description={item.description} navigation={navigation}/>
			)}/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {	
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	rowItem: {
		width: "100%"
	}
})