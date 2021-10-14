import React from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel, ChartXLabel} from '@rainbow-me/animated-charts';
export const {width: SIZE} = Dimensions.get('window');
import {useState,useContext} from "react"
import { useEffect } from 'react/cjs/react.development';
import { block } from 'react-native-reanimated';
import moment from "moment";


const Chart = ( {hourData, dayData, monthData, yearData, symbol}) => {
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

    const formatDate = value => {
      'worklet';
      if (value === '') {
        return '';
      }
      var val = parseInt(value);
      const date = new Date(Number(val * 1000));
      const m = date.getMinutes();
      const h = date.getHours();
      const d = date.getDate();
      const n = date.getMonth();
      const y = date.getFullYear();
      return `${y}-${n}-${d} ${h}:${m}`;
    };

    return (
        <ChartPathProvider data={{ points:data, smoothingStrategy: 'bezier' }}>
          <View style={styles.lowerTitles}>
            <ChartYLabel
              format={formatUSD}
              style={styles.boldTitle}
            />
            <ChartXLabel
              format={formatDate}
              style={styles.boldTitle}
            />
          </View>
          <View style = {styles.chartLineWrapper}>
            <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
            <ChartDot style={{ backgroundColor: 'black' }} />
          </View>
        <View style = {styles.buttonContainer}>
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
        </View>
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
      color: 'black',
    },
    lowerTitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    boldTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    title: {
      fontSize: 18,
    },
    chartLineWrapper: {
      marginTop: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-around",
    },
  });

export default Chart