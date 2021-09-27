import React, {useContext, useEffect, useState} from "react"
import { Image, TouchableHighlight, StyleSheet, Text, View, FlatList, ScrollView} from "react-native"

export default function CompanyRowItem(props) {
    const {symbol, description} = props;

    // TODO: implement on click event for when company is clicked
    // to navigate to their buy/sell page
    function companyRowItemOnClick() {
        props.navigation.push("BuySell")
    }

    // Likely need to make another API call to get the stock amounts for the given company
    // https://finnhub.io/docs/api/stock-candles
    return (
		<TouchableHighlight onPress={companyRowItemOnClick} underlayColor="white" style={styles.container}>
            <View>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 0.25,
        borderColor: "gray"
	},
    symbol: {
        color: "gray"
    },
    description: {
        color: "gray"
    }
})