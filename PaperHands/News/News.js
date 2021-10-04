//
//  News
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React,{useEffect,useState} from "react"
import { Image, StyleSheet, Text, View,ScrollView } from "react-native"
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
	
	return (
		<ScrollView>
			{articles.map((result,key)=>(
            <View>
          	<Text>{result.headline}</Text>
          	<Text>{result.summary}</Text>
          <Image style={styles.tinyLogo} source={{uri:result.image}}/>
         <Text>Visit article:{result.url}</Text>
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
