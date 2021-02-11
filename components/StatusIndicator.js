import React from "react";
import { Text, Image, View } from "react-native";
import Styles from "../Styles";

export default function StatusIndicator({
	hasFirstSearch,
	isError,
	isLoading,
	isWord,
}) {
	if (!hasFirstSearch) {
		return null;
	} else if (isError) {
		return (
			<Text style={[Styles.invalid, Styles.bigText, Styles.status]}>
				Error
			</Text>
		);
	} else if (isLoading) {
		return (
			<View style={Styles.hzCenter}>
				<Image
					source={require("../assets/loader.gif")}
					style={[Styles.loader]}
					resizeMode="contain"
				/>
			</View>
		);
	} else if (isWord) {
		return (
			<Text style={[Styles.success, Styles.text, Styles.status]}>
				Yes!
			</Text>
		);
	} else {
		return (
			<Text style={[Styles.invalid, Styles.bigText, Styles.status]}>
				Not a word
			</Text>
		);
	}
}
