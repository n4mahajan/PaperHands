import React from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel, ChartXLabel} from '@rainbow-me/animated-charts';
export const {width: SIZE} = Dimensions.get('window');
import {useState,useContext} from "react"
import { useEffect } from 'react/cjs/react.development';
import { block } from 'react-native-reanimated';
import moment from "moment";


const Chart = ( {hourData, dayData, monthData, yearData, symbol}) => {
	  const [data, setData] = useState()
    let previous = null
    const [activeLabel, setActiveLabel] = useState("Hour");

    useEffect(() => {
      if (hourData !== previous) {
        previous = hourData
        setData(hourData)
      }
    }, [hourData])

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
        return `$${value.toLocaleString('en-US', {
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
      const d = date.getDate();
      const n = date.getMonth();
      const y = date.getFullYear();
      return `${y}-${n}-${d}`;
    };

    const formatTime = value => {
      'worklet';
      if (value === '') {
        return '';
      }
      var val = parseInt(value);
      const date = new Date(Number(val * 1000));
      let m = date.getMinutes();
      const h = date.getHours();
      if (m < 10) {
        return `${h}:0${m}`
      }
      return `${h}:${m}`;
    };

    return (
        <ChartPathProvider data={{ points: data, smoothingStrategy: 'bezier' }}>
          <View style={styles.lowerTitles}>
            <ChartYLabel
              format={formatUSD}
              style={styles.boldTitle}
            />
            <ChartXLabel
              format={formatDate}
              style={styles.boldTitle}
            />
            <ChartXLabel
              format={formatTime}
              style={styles.boldTitle}
            />
          </View>
          <View style = {styles.chartLineWrapper}>
            <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
            <ChartDot style={{ backgroundColor: 'black' }} />
          </View>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity	
          style={[activeLabel === "Hour" && styles.activeGraphLabel]}
          onPress={() => {
            setData(hourData)
            setActiveLabel("Hour")}}>
            <View>
              <Text style={styles.buttonText}> {graphs[0].label}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={[activeLabel === "Day" && styles.activeGraphLabel]}
          onPress={() => {
            setData(dayData)
            setActiveLabel("Day")}}>
            <View>
              <Text style={styles.buttonText}> {graphs[1].label}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={[activeLabel === "Month" && styles.activeGraphLabel]}
          onPress={() => {
            setData(monthData)
            setActiveLabel("Month")
          }}>
            <View>
              <Text style={styles.buttonText}> {graphs[2].label}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={[activeLabel === "Year" && styles.activeGraphLabel]}
          onPress={() => {
            setData(yearData)
            setActiveLabel("Year")
          }}>
            <View>
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
      width: "90%",
      alignSelf: "center"
    },
    activeGraphLabel: {
      backgroundColor: '#bcbcbc',
      borderRadius: 5,
      width: "10%",
      height: "120%"
    },
    buttonText: {
      alignSelf: "center"
    }
  });

export default Chart