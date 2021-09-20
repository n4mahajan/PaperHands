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
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	SignUp: {
		screen: SignUp,
	},
}, {
	initialRouteName: "SignUp",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {
		return <AppContainer/>
	}
}