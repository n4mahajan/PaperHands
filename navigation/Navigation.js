import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import BuySell from "../PaperHands/BuySell/BuySell"
import Home from "../PaperHands/Home/Home"
import Login from "../PaperHands/Login/Login"
import Profile from "../PaperHands/Profile/Profile"
import Portfolio from "../PaperHands/Portfolio/Portfolio"
import News from "../PaperHands/News/News"
import Welcome from "../PaperHands/Welcome/Welcome"
import SignUp from "../PaperHands/SignUp/SignUp"
import { AuthContext } from '../context/AuthProvider';

import React, {useContext} from 'react';
import { View } from "react-native"

import Icon from 'react-native-vector-icons/Feather';

const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack=createStackNavigator()
const PortStack=createStackNavigator()
const NewsStack=createStackNavigator()
const ProfileStack=createStackNavigator()

const home = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
      headerBackTitleVisible:false,
      headerTintColor:'black'
    }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        name="BuySell"
        component={BuySell}
      />
    </HomeStack.Navigator>
  );
};

const port = ({navigation}) => {
  return (
    <PortStack.Navigator>
      <PortStack.Screen
        name="Portfolio"
        component={Portfolio}
      />
      <PortStack.Screen
        name="BuySell"
        component={BuySell}
      />
    </PortStack.Navigator>
  );
}

const news = ({navigation}) => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={News}
      />
    </NewsStack.Navigator>
  );
}

const profile = ({navigation}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
}


export default function Navigation({navigation}) {
    const {user} = useContext(AuthContext);
    if (user==null){
        return (
            <NavigationContainer theme={MyTheme}>
              <LoginStack.Navigator>
                <LoginStack.Screen
                    name="Login"
                    component={Login}
                    options={{headerLeft: () => null}}
                    options={{header: () => null}}
                />
                <LoginStack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{headerLeft: () => null}}
                    options={{header: () => null}}
                />
              </LoginStack.Navigator>
            </NavigationContainer>
          );
    }
    if (user!=null){
        return (
            <NavigationContainer theme={MyTheme}>
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                tabBarOptions={{
                  activeTintColor: "#E400FF"
                }}
              >
                <Tab.Screen
                  name="Home"
                  component={home}
                  options={{
                    tabBarIcon: ({focused, size, color}) => {
                      return (
                        <View style={{backgroundColor: focused ? "#E400FF" : "white", borderRadius: 10, width: 45, alignItems: "center"}}>
                          <Icon name="trending-up" size={size} color={focused ? "white" : "gray"}/>
                        </View>
                      )
                    }
                  }}
                />
                <Tab.Screen
                  name="Portfolio"
                  component={port}
                  options={{
                    tabBarIcon: ({focused, size, color}) => {
                      return (
                        <View style={{backgroundColor: focused ? "#E400FF" : "white", borderRadius: 10, width: 45, alignItems: "center"}}>
                          <Icon name="pie-chart" size={size} color={focused ? "white" : "gray"}/>
                        </View>
                      )
                    }
                  }}
                />
                <Tab.Screen
                  name="News"
                  component={news}
                  options={{
                    tabBarIcon: ({focused, size, color}) => {
                      return (
                        <View style={{backgroundColor: focused ? "#E400FF" : "white", borderRadius: 10, width: 45, alignItems: "center"}}>
                          <Icon name="book-open" size={size} color={focused ? "white" : "gray"}/>
                        </View>
                      )
                    }
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={profile}
                  options={{
                    tabBarIcon: ({focused, size, color}) => {
                      return (
                        <View style={{backgroundColor: focused ? "#E400FF" : "white", borderRadius: 10, width: 45, alignItems: "center"}}>
                          <Icon name="user" size={size} color={focused ? "white" : "gray"}/>
                        </View>
                      )
                    }
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          );
    }
    
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'white'
  },
};