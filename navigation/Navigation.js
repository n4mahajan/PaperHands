import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import BuySell from "../PaperHands/BuySell/BuySell"
import Login from "../PaperHands/Login/Login"
import Profile from "../PaperHands/Profile/Profile"
import Portfolio from "../PaperHands/Portfolio/Portfolio"
import News from "../PaperHands/News/News"
import Welcome from "../PaperHands/Welcome/Welcome"
import SignUp from "../PaperHands/SignUp/SignUp"
import { AuthContext } from '../context/AuthProvider';

import React, {useContext} from 'react';

const LoginStack = createStackNavigator();
const Tab=createBottomTabNavigator();


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
                  name="BuySell"
                  component={BuySell}
                />
                <Tab.Screen
                  name="News"
                  component={News}
                />
                <Tab.Screen
                  name="Portfolio"
                  component={Portfolio}
                />
                <Tab.Screen
                  name="Profile"
                  component={Profile}
                />
              </Tab.Navigator>
            </NavigationContainer>
              
          );
    }
    
}