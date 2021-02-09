import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Linking,
	TouchableHighlight,
} from "react-native";

export default function Attribution({ possibleWord, hasFirstSearch }) {
	const AttLink = () => {
		if (hasFirstSearch) {
			return (
				<Text style={styles.text}>
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
					style={styles.logo}
					resizeMode="contain"
				/>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "#fff",
	},
	logo: {
		width: 115,
		height: 32,
	},
});
