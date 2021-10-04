import React from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
export const {width: SIZE} = Dimensions.get('window');


const Chart = ( {xAxis, yAxis, symbol}) => {
    let data = []
    for (var i = 0; i < yAxis.length; i++){
        let temp = { x:xAxis[i], y:yAxis[i]}
        data.push(temp)
    }
    console.log("data is")
    console.log(data)
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