import React,{useEffect,useState} from 'react'
import {View,TextInput,FlatList,Text,StyleSheet,TouchableOpacity} from 'react-native'
import axios from "axios"


const SearchBar=({navigation,setToggle})=>{
    const [search, setSearch]=useState('')
	const [results, setResults]=useState([])

    useEffect(()=>{

		async function fetchData() {
			if (search.length > 0){
				const response = await axios.get(`https://finnhub.io/api/v1/search?q=${search}&token=btnth1n48v6p0j27i8k0`)
				const results = await response.data
				const holder=[]
				results.result.forEach(element => {
					if(element.type=="Common Stock"){
						holder.push(element)
					}
				});
				console.log(holder)
				setResults(holder.slice(0, 5))
			}else{
				setResults([])
			}
		}
		fetchData()
		
	},[search])

    return(
        <View>
				<TextInput style={styles.textinput} placeholder="Search" placeholderTextColor = "black" onChangeText={setSearch}/>
				<FlatList data={results} renderItem={({item})=>(
					<TouchableOpacity onPress={()=>{
						setToggle(false)
						navigation.push("BuySell", {symbol: item.symbol})
						
					}}>
						<Text style={styles.text}>{item.symbol}: {item.description}</Text>
					</TouchableOpacity>

				)}/>
		</View> 
    )
}

const styles=StyleSheet.create({
	textinput:{
		height: 40,
    	margin: 12,
    	borderWidth: 1,
    	padding: 10,
		borderRadius:25,
		color:'black'
		
	},
	text:{
		fontSize:20
	}
})

export default SearchBar