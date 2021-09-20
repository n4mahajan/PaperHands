//
//  News
//  PaperHands
//
//  Created by Nikhil, Kiran, Jiahao.
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class News extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.newsView}>
				<Image
					source={require("./../../assets/images/componente-6-1.png")}
					style={styles.componente61Image}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 45,
						height: 806,
					}}>
					<View
						style={styles.headerView}>
						<Image
							source={require("./../../assets/images/icons8-expand-arrow.png")}
							style={styles.icons8ExpandArrowImage}/>
						<Text
							style={styles.newsText}>NEWS</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/icons8-menu-vertical.png")}
							style={styles.icons8MenuVerticalImage}/>
					</View>
					<View
						style={styles.articlesClippedView}>
						<Image
							source={require("./../../assets/images/rettangolo-2-2.png")}
							style={styles.rettangolo22Image}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 22,
								width: 324,
								top: 248,
								bottom: 0,
								alignItems: "flex-end",
							}}>
							<View
								style={styles.raggruppa2View}>
								<Image
									source={require("./../../assets/images/-2390177.png")}
									style={styles.imageImage}/>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "flex-start",
										height: 72,
										marginLeft: 20,
										marginRight: 18,
										marginTop: 11,
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 33,
											marginRight: 14,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												width: 66,
												height: 33,
											}}>
											<Text
												style={styles.atlantiaText}>ATLANTIA</Text>
											<Text
												style={styles.alt387Text}>ALT -3,87%</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.sept2020Text}>3 Sept 2020</Text>
									</View>
									<View
										style={styles.illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEvView}>
										<Text
											style={styles.illumVelitNamVoluptatumEnimAutText}>Illum velit nam voluptatum enim aut</Text>
										<Text
											style={styles.rationeRationeOfficiisTotamText}>ratione ratione officiis totam.</Text>
										<Text
											style={styles.mollitiaEumSintTemporaDucimusText}>Mollitia eum sint tempora ducimus</Text>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/gruppo-di-maschere-1-clipped.png")}
									style={styles.gruppoDiMaschere1ClippedImage}/>
							</View>
							<View
								style={styles.raggruppa22View}>
								<Image
									source={require("./../../assets/images/-2351087.png")}
									style={styles.imageTwoImage}/>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										height: 72,
										marginLeft: 20,
										marginRight: 18,
										marginTop: 11,
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 33,
											marginRight: 14,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												width: 53,
												height: 33,
											}}>
											<Text
												style={styles.xiaomiText}>XIAOMI</Text>
											<Text
												style={styles.hkd213Text}>HKD -2,13%</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.sept2020TwoText}>2 Sept 2020</Text>
									</View>
									<View
										style={styles.illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEv2View}>
										<Text
											style={styles.illumVelitNamVoluptatumEnimAutTwoText}>Illum velit nam voluptatum enim aut</Text>
										<Text
											style={styles.rationeRationeOfficiisTotamTwoText}>ratione ratione officiis totam.</Text>
										<Text
											style={styles.mollitiaEumSintTemporaDucimusTwoText}>Mollitia eum sint tempora ducimus</Text>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/gruppo-di-maschere-1-2-clipped.png")}
									style={styles.gruppoDiMaschere12ClippedImage}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.raggruppa23View}>
								<Image
									source={require("./../../assets/images/-2390177.png")}
									style={styles.imageThreeImage}/>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "flex-start",
										height: 72,
										marginLeft: 20,
										marginRight: 18,
										marginTop: 11,
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 33,
											marginRight: 14,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												width: 59,
												height: 33,
											}}>
											<Text
												style={styles.appleText}>APPLE</Text>
											<Text
												style={styles.aapl091Text}>AAPL -0,91%</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.sept2020ThreeText}>1 Sept 2020</Text>
									</View>
									<View
										style={styles.illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEv3View}>
										<Text
											style={styles.illumVelitNamVoluptatumEnimAutThreeText}>Illum velit nam voluptatum enim aut</Text>
										<Text
											style={styles.rationeRationeOfficiisTotamThreeText}>ratione ratione officiis totam.</Text>
										<Text
											style={styles.mollitiaEumSintTemporaDucimusThreeText}>Mollitia eum sint tempora ducimus</Text>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/gruppo-di-maschere-1-2-clipped.png")}
									style={styles.gruppoDiMaschere13ClippedImage}/>
							</View>
							<View
								style={styles.raggruppa24View}>
								<Image
									source={require("./../../assets/images/-3062134-2.png")}
									style={styles.imageFourImage}/>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										height: 72,
										marginLeft: 20,
										marginRight: 18,
										marginTop: 11,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 33,
											marginRight: 14,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												width: 66,
												height: 33,
											}}>
											<Text
												style={styles.atlantiaTwoText}>ATLANTIA</Text>
											<Text
												style={styles.msft387Text}>MSFT -3,87%</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.sept2020FourText}>3 Sept 2020</Text>
									</View>
									<View
										style={styles.illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEv4View}>
										<Text
											style={styles.illumVelitNamVoluptatumEnimAutFourText}>Illum velit nam voluptatum enim aut</Text>
										<Text
											style={styles.rationeRationeOfficiisTotamFourText}>ratione ratione officiis totam.</Text>
										<Text
											style={styles.mollitiaEumSintTemporaDucimusFourText}>Mollitia eum sint tempora ducimus</Text>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/gruppo-di-maschere-1-4-clipped.png")}
									style={styles.gruppoDiMaschere14ClippedImage}/>
							</View>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						right: 26,
						width: 324,
						top: 130,
						height: 259,
						alignItems: "center",
					}}>
					<View
						style={styles.mainView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/group.png")}
								style={styles.groupImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/tracciato-1283.png")}
								style={styles.tracciato1283Image}/>
						</View>
						<View
							style={styles.titleView}>
							<View
								style={styles.raggruppa5View}>
								<Text
									style={styles.editorialText}>EDITORIAL</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 49,
									marginTop: 9,
								}}>
								<View
									style={styles.rettangolo13View}/>
								<View
									style={styles.whatIsTheFutureOfCryptocurrenciesView}>
									<Text
										style={styles.whatIsTheFutureOfText}>What is the future of</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.cryptocurrenciesText}>cryptocurrencies?</Text>
								</View>
							</View>
						</View>
					</View>
					<Image
						source={require("./../../assets/images/alert.png")}
						style={styles.alertImage}/>
				</View>
				<View
					style={styles.menuButtonView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/componente-1-24.png")}
							style={styles.componente124Image}/>
					</View>
					<Image
						source={require("./../../assets/images/raggruppa-1523.png")}
						style={styles.raggruppa1523Image}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	newsView: {
		backgroundColor: "white",
		flex: 1,
	},
	componente61Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: -65,
		right: -65,
		top: -181,
		height: 328,
	},
	headerView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 315,
		height: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	icons8ExpandArrowImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 20,
	},
	newsText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 19,
	},
	icons8MenuVerticalImage: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 18,
		height: 18,
	},
	articlesClippedView: {
		backgroundColor: "transparent",
		height: 759,
		marginTop: 21,
	},
	rettangolo22Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 720,
	},
	raggruppa2View: {
		backgroundColor: "white",
		borderRadius: 4,
		width: 324,
		height: 104,
		flexDirection: "row",
		alignItems: "center",
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 104,
	},
	atlantiaText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 16,
	},
	alt387Text: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		width: 50,
		top: 0,
	},
	sept2020Text: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 54,
	},
	illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEvView: {
		backgroundColor: "transparent",
		width: 151,
		height: 36,
		marginTop: 3,
	},
	illumVelitNamVoluptatumEnimAutText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		right: -3,
		top: 0,
	},
	rationeRationeOfficiisTotamText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 124,
		top: 12,
	},
	mollitiaEumSintTemporaDucimusText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		right: 2,
		bottom: -12,
	},
	gruppoDiMaschere1ClippedImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 27,
		height: 26,
		marginRight: 6,
		marginBottom: 6,
	},
	raggruppa22View: {
		backgroundColor: "white",
		borderRadius: 4,
		width: 324,
		height: 104,
		marginTop: 31,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	imageTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 102,
		height: 104,
	},
	xiaomiText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 16,
	},
	hkd213Text: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		width: 52,
		top: 0,
	},
	sept2020TwoText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 54,
	},
	illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEv2View: {
		backgroundColor: "transparent",
		width: 151,
		height: 36,
		marginTop: 3,
	},
	illumVelitNamVoluptatumEnimAutTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		right: -3,
		top: 0,
	},
	rationeRationeOfficiisTotamTwoText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 124,
		top: 12,
	},
	mollitiaEumSintTemporaDucimusTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		right: 2,
		bottom: -12,
	},
	gruppoDiMaschere12ClippedImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 26,
		height: 25,
		marginRight: 7,
		marginBottom: 7,
	},
	raggruppa23View: {
		backgroundColor: "white",
		borderRadius: 4,
		width: 324,
		height: 104,
		marginBottom: 31,
		flexDirection: "row",
		alignItems: "center",
	},
	imageThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 102,
		height: 104,
	},
	appleText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		top: 16,
	},
	aapl091Text: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 1,
		width: 58,
		top: 0,
	},
	sept2020ThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 54,
	},
	illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEv3View: {
		backgroundColor: "transparent",
		width: 151,
		height: 36,
		marginTop: 3,
	},
	illumVelitNamVoluptatumEnimAutThreeText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: -3,
		top: 0,
	},
	rationeRationeOfficiisTotamThreeText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 124,
		top: 12,
	},
	mollitiaEumSintTemporaDucimusThreeText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 2,
		bottom: -12,
	},
	gruppoDiMaschere13ClippedImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 26,
		height: 25,
		marginRight: 7,
		marginBottom: 7,
	},
	raggruppa24View: {
		backgroundColor: "white",
		borderRadius: 4,
		width: 324,
		height: 104,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	imageFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 102,
		height: 104,
	},
	atlantiaTwoText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 16,
	},
	msft387Text: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		width: 59,
		top: 0,
	},
	sept2020FourText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 54,
	},
	illumVelitNamVoluptatumEnimAutRationeRationeOfficiisTotamMollitiaEumSintTemporaDucimusNequeEarumSintOfficiaUtDoloremDictaUtVeritatisFugaQuisQuisVoluptatemVeroInSolutaVoluptatemVoluptatemPerspiciatisCumQuisquamHarumEv4View: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 151,
		height: 36,
		marginTop: 3,
	},
	illumVelitNamVoluptatumEnimAutFourText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: -3,
		top: 0,
	},
	rationeRationeOfficiisTotamFourText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 124,
		top: 12,
	},
	mollitiaEumSintTemporaDucimusFourText: {
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 2,
		bottom: -12,
	},
	gruppoDiMaschere14ClippedImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 10,
		marginRight: 23,
		marginTop: 72,
	},
	mainView: {
		backgroundColor: "transparent",
		width: 324,
		height: 177,
	},
	groupImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 175,
		marginLeft: 2,
	},
	tracciato1283Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 176,
		marginLeft: 1,
	},
	titleView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 17,
		width: 196,
		top: 39,
		height: 73,
		alignItems: "flex-end",
	},
	raggruppa5View: {
		backgroundColor: "rgb(12, 242, 180)",
		borderRadius: 7.5,
		width: 57,
		height: 15,
		justifyContent: "center",
	},
	editorialText: {
		color: "black",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 5,
		marginRight: 3,
	},
	rettangolo13View: {
		backgroundColor: "rgb(150, 107, 232)",
		opacity: 0.62,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 49,
	},
	whatIsTheFutureOfCryptocurrenciesView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 9,
		right: 2,
		top: 2,
		height: 42,
		alignItems: "flex-end",
	},
	whatIsTheFutureOfText: {
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginRight: 21,
	},
	cryptocurrenciesText: {
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 19,
	},
	alertImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 15,
		height: 15,
		marginTop: 67,
	},
	menuButtonView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 70,
	},
	componente124Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(191, 191, 191, 0.15)",
		shadowRadius: 10,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 70,
	},
	raggruppa1523Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		alignSelf: "center",
		width: 265,
		top: 18,
		height: 29,
	},
})
