import React,{useEffect,useState} from 'react'
import {View,TextInput,FlatList,Text} from 'react-native'
import axios from "axios"


const SearchBar=()=>{
    const [search, setSearch]=useState('')
	const [results, setResults]=useState([])

    useEffect(()=>{

		async function fetchData() {
			if (search.length > 0){
				const response = await axios.get(`https://finnhub.io/api/v1/search?q=${search}&token=btnth1n48v6p0j27i8k0`)
				const results = await response.data
				console.log(results.result)
				setResults(results.result.slice(0, 5))
			} else{
				setResults([])
			}
		}
		fetchData()
		
	},[search])

    return(
        <View>
				<TextInput placeholder="search stock" onChangeText={setSearch}/>
				<FlatList data={results} renderItem={({item})=>(
					<Text>{item.symbol}:{item.description}</Text>

				)}/>
		</View> 
    )
}

export default SearchBar