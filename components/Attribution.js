import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, Linking, TouchableHighlight } from "react-native";

import Styles from "../Styles";

export default function Attribution({ possibleWord, hasFirstSearch }) {
	const AttLink = () => {
		if (hasFirstSearch) {
			return (
				<Text style={Styles.text}>
					https://www.wordnik.com/words/{possibleWord}
				</Text>
			);
		} else {
			return null;
		}
	};
	return (
		<View>
			<AttLink />
			<TouchableHighlight
				onPress={() => Linking.openURL("https://wordnik.com")}
			>
				<Image
					source={require("../assets/wordnik.png")}
					style={Styles.logo}
					resizeMode="contain"
				/>
			</TouchableHighlight>
		</View>
	);
}
