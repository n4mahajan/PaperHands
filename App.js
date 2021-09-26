//
//  App.js
//  PaperHandsFullExceptHome
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import BuySell from "./PaperHands/BuySell/BuySell"
import Login from "./PaperHands/Login/Login"
import Profile from "./PaperHands/Profile/Profile"
import Portfolio from "./PaperHands/Portfolio/Portfolio"
import News from "./PaperHands/News/News"
import Welcome from "./PaperHands/Welcome/Welcome"
import SignUp from "./PaperHands/SignUp/SignUp"
import React from "react"
import { AppLoading, DangerZone } from "expo"
import AuthProvider from "./context/AuthProvider"
import Navigation from "./navigation/Navigation"
import ContextWrapper from "./components/ContextWrapper"
import {Text} from "react-native"



export default function App (){
		return(
			<ContextWrapper>
				<Navigation/>
			</ContextWrapper>
		) 
}