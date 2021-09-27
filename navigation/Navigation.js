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

const home = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Inner Home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
};


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
                />
              </LoginStack.Navigator>
            </NavigationContainer>
          );
    }
    if (user!=null){
        return (
            <NavigationContainer>
              <Tab.Navigator>
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
                  component={Portfolio}
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
                  component={News}
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
                  component={Profile}
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