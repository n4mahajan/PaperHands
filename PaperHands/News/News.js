//
//  News
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useEffect,useState,useCallback} from "react"
import { Image, StyleSheet, Text, View,ScrollView,Linking,Button } from "react-native"
import axios from 'axios'



export default function News (){
	const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)

	useEffect(()=>{
		async function fetchData() {
			const response = await axios.get(
				"https://finnhub.io/api/v1/news?category=general&token=c54gglaad3ifdcrdm7u0"
			);
			const results = await response.data
			const shorten = results.slice(0,20)
			setArticles(shorten)
			setLoading(false)
		}
		
		fetchData()
		console.log('here')
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
	  
		return <Button title={children} onPress={handlePress} />;
	  };
	
	return (
		<ScrollView>
			{articles.map((result,key)=>(
            <View>
          	<Text>{result.headline}</Text>
          	<Text>{result.summary}</Text>
          <Image style={styles.tinyLogo} source={{uri:result.image}}/>
		 <OpenURLButton url={result.url}>Visit Article</OpenURLButton>
		 	</View>
        ))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	tinyLogo: {
		aspectRatio: 1.5, 
    	resizeMode: 'contain',
		
	  },
})
