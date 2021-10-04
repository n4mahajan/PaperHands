import React from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
export const {width: SIZE} = Dimensions.get('window');
import {useState,useContext} from "react"


const Chart = ( {hourData, dayData, monthData, yearData, symbol}) => {
    const [chartState, setChartState] = useState(0)
	  const [data, setData] = useState(hourData)
    const graphs = [
      {
        label: "1H",
        value: 0,
        data: hourData,
      },
      {
        label: "1D",
        value: 1,
        data: dayData,
      },
      {
        label: "1M",
        value: 2,
        data: monthData,
      },
      {
        label: "1Y",
        value: 3,
        data: yearData,
      },
    ];

    const formatUSD = value => {
        'worklet';
        if (value === '') {
          return '';
        }
        return `$ ${value.toLocaleString('en-US', {
          currency: 'USD',
        })}`;
    };
    return (
        <ChartPathProvider data={{ points:data, smoothingStrategy: 'bezier' }}>
        <View>
            <Text>
                Chart WIP
                {symbol}
            </Text>
        </View>
        <View style={styles.lowerTitles}>
            <ChartYLabel
              format={formatUSD}
              style={styles.boldTitle}
            />
          </View>
        <View style = {styles.chartLineWrapper}>
            <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
            <ChartDot style={{ backgroundColor: 'black' }} />
        </View>
        <TouchableOpacity 			
        onPress={() => 
          setData(hourData)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> {graphs[0].label}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 			
        onPress={() => 
          setData(dayData)}>
          <View style={styles.button}>
          <Text style={styles.buttonText}> {graphs[1].label}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 			
        onPress={() => 
          setData(monthData)}>
          <View style={styles.button}>
          <Text style={styles.buttonText}> {graphs[2].label}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 			
        onPress={() => 
          setData(yearData)}>
          <View style={styles.button}>
          <Text style={styles.buttonText}> {graphs[3].label}</Text>
          </View>
        </TouchableOpacity>
        </ChartPathProvider>
    )
}

const styles = StyleSheet.create({
    chartWrapper: {
      marginVertical: 16
    },
    titlesWrapper: {
      marginHorizontal: 16
    },
    upperTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    upperLeftTitle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 24,
      height: 24,
      marginRight: 4,
    },
    subtitle: {
      fontSize: 14,
      color: '#A9ABB1',
    },
    lowerTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    boldTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 18,
    },
    chartLineWrapper: {
      marginTop: 40,
    },
  });

export default Chart