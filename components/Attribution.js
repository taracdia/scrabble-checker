import React from "react";
import { Text, View, Image, Linking, TouchableHighlight } from "react-native";

import Styles from "../Styles";

export default function Attribution({ possibleWord, hasFirstSearch }) {
	const AttLink = () => {
		if (hasFirstSearch) {
			return (
				<Text style={Styles.white}>
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
				style={Styles.hzCenter}
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
