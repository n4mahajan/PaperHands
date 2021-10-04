import React, {useContext, useEffect, useState} from "react"
import { Image, TouchableHighlight, StyleSheet, Text, View } from "react-native"
import axios from 'axios'

export default function CompanyRowItem(props) {
    const {symbol, description} = props;

    const [price, setPrice] = useState(null)
    const [priceChange, setPriceChange] = useState(null)
    const [percentChange, setPercentChange] = useState(null)

    useEffect(() => {
		async function fetchData() {
			const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=btnth1n48v6p0j27i8k0`)
			const profile = await response.data

            console.log(profile.c)

            // Extract price data from company
			setPrice(profile.c.toFixed(2))
            setPriceChange(profile.d.toFixed(2))
            setPercentChange(profile.dp.toFixed(2))
		}
		fetchData()
		
	}, [])

    // TODO: implement on click event for when company is clicked
    // to navigate to their buy/sell page
    function companyRowItemOnClick() {
        props.navigation.push("BuySell", {symbol: symbol})
    }

    // Likely need to make another API call to get the stock amounts for the given company
    // https://finnhub.io/docs/api/stock-candles
    return (
		<TouchableHighlight onPress={companyRowItemOnClick} underlayColor="white">
            <View style={styles.container}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.symbol}>{symbol}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <TouchableHighlight style={styles.priceBox}>
						<Text>${ price }</Text>
					</TouchableHighlight>
                    <Text style={styles.priceText}>{priceChange} ({percentChange}%)</Text>
                </View>
            </View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 0.25,
        borderColor: "gray",
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
	},
    symbol: {
        color: "gray",
        fontSize: 20
    },
    description: {
        color: "gray",
        fontSize: 14,
    },
    priceBox: {
		backgroundColor: "#2BFEBA",
		borderRadius: 15,
        width: "80%",
		alignItems: "center"
	},
    priceContainer: {
        width: "35%",
        alignItems: "center",
        flexDirection: "column"
    },
    descriptionContainer: {
        width: "65%",
        alignItems: "flex-start",
    },
    priceText: {
        paddingTop: 5
    }
})