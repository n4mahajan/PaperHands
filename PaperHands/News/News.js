//
//  News
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useEffect,useState,useCallback} from "react"
import { Image, StyleSheet, Text, View,ScrollView,Linking,Button, TouchableOpacity } from "react-native"
import axios from 'axios'
import Icon from 'react-native-vector-icons/Feather';


export default function News (){
	const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)

	useEffect(()=>{
		async function fetchData() {
			const response = await axios.get(
				"https://finnhub.io/api/v1/news?category=general&token=c54gglaad3ifdcrdm7u0"
			);
			const results = await response.data
			// Exclude Bloomberg articles as they tend to be unrelated to business/stock information
			const shorten = results.filter(item => item.source !== "Bloomberg")
			setArticles(shorten)
			setLoading(false)
		}
		
		fetchData()
	  },[])

	  const OpenURLButton = ({ url, children }) => {
		const handlePress = useCallback(async () => {
		  // Checking if the link is supported for links with custom URL scheme.
		  const supported = await Linking.canOpenURL(url);
	  
		  if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		  } else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		  }
		}, [url]);
	  
		return <TouchableOpacity style={{position: "absolute", bottom: 0, right: 0}} onPress={handlePress}>
					<Icon name="corner-up-right" size={25}></Icon>
				</TouchableOpacity>
	  };

	  function parseDate(date) {
		  return date = new Date(date * 1000).toDateString()
	  }

	return (
		<ScrollView style={{backgroundColor: "white", marginTop: "5%"}}>
			<Text style={{fontSize: 22, marginBottom: "5%", fontWeight: "bold", alignSelf: "center"}}>Financial News Provided by Finnhub:</Text>
			{articles.map((result,key)=>(
            <View style={styles.container} key={key}>
				<View style={{justifyContent: "flex-start", alignItems: "flex-start", width: "35%"}}>
					<Image style={styles.tinyLogo} source={{uri:result.image}}/>
				</View>
				<View style={{flex: 1, width: "65%", marginTop: "2%"}}>
					<View style={{flexDirection: "row", justifyContent: "space-between"}}>
						<Text style={{fontWeight: "bold", marginBottom: "3%", fontSize: 16, width: "50%"}}>{result.headline}</Text>
						<Text style={{color: "#999999"}}>{parseDate(result.datetime)}</Text>
					</View>
					<Text style={{fontSize: 13, width: "80%"}}>{result.summary}</Text>
					<OpenURLButton url={result.url} >Visit Article</OpenURLButton>
				</View>
		 	</View>
        ))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	tinyLogo: {
		width: "90%",
		height: "100%",
		resizeMode: "cover",
		borderRadius: 8
	  },
	  container: {
        width: "98%",
        backgroundColor: "#FFFFFF",
        borderColor: "gray",
        flexDirection: "row",
        justifyContent: "space-between",
		marginBottom: "5%",
		borderRadius: 8,
		alignSelf: "center", 
		flex: 1, 
		backgroundColor: "#ebebeb"
	},
})
