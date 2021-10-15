import {NavigationContainer} from '@react-navigation/native';
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
import { Image } from "react-native"

// Import icons for navigation
import homeIcon from "../assets/images/homeIcon.png"
import portfolioIcon from "../assets/images/portfolioIcon.png"
import newsIcon from "../assets/images/newsIcon.png"
import profileIcon from "../assets/images/profileIcon.png"

// Colored icon when given page/component is selected
import selectedHomeIcon from "../assets/images/selectedHomeIcon.png"
import selectedPortfolioIcon from "../assets/images/selectedPortfolioIcon.png"
import selectedNewsIcon from "../assets/images/selectedNewsIcon.png"
import selectedProfileIcon from "../assets/images/selectedProfileIcon.png"


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
            <NavigationContainer>
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
            <NavigationContainer>
              <Tab.Navigator
              screenOptions={{
                headerShown: false,
              }}>
                <Tab.Screen
                  name="Home"
                  component={home}
                  options={{
                    tabBarIcon: ({focused}) => {
                      if (!focused) {
                        return (
                          <Image 
                            source={homeIcon}
                          />
                        );
                      } else {
                        return (
                          <Image 
                            source={selectedHomeIcon}
                          />
                        );
                      }
                    },
                  }}
                />
                <Tab.Screen
                  name="Portfolio"
                  component={port}
                  options={{
                    tabBarIcon: ({focused}) => {
                      if (!focused) {
                        return (
                          <Image 
                            source={portfolioIcon}
                          />
                        );
                      } else {
                        return (
                          <Image 
                            source={selectedPortfolioIcon}
                          />
                        );
                      }
                    },
                  }}
                />
                <Tab.Screen
                  name="News"
                  component={news}
                  options={{
                    tabBarIcon: ({focused}) => {
                      if (!focused) {
                        return (
                          <Image 
                            source={newsIcon}
                          />
                        );
                      } else {
                        return (
                          <Image 
                            source={selectedNewsIcon}
                          />
                        );
                      }
                    },
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={profile}
                  options={{
                    tabBarIcon: ({focused}) => {
                      if (!focused) {
                        return (
                          <Image 
                            source={profileIcon}
                          />
                        );
                      } else {
                        return (
                          <Image 
                            source={selectedProfileIcon}
                          />
                        );
                      }
                    },
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          );
    }
    
}