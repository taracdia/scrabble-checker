import React from "react";
import { Text, Image } from "react-native";
import Styles from "../Styles";

export default function StatusIndicator({
	hasFirstSearch,
	isError,
	isLoading,
	isWord,
}) {
	// if (!hasFirstSearch) {
	// 	return null;
	// } else if (isError) {
	return (
		<Text style={[Styles.invalid, Styles.text, Styles.bold]}>Error</Text>
	);
	// } else if (isLoading) {
	// 	return (
	// 		<Image
	// 			source={require("../assets/loader.gif")}
	// 			style={Styles.loader}
	// 			resizeMode="contain"
	// 		/>
	// 	);
	// } else if (isWord) {
	// 	return <Text style={[Styles.success, Styles.text]}>Yes!</Text>;
	// } else {
	// 	return <Text style={[Styles.invalid, Styles.text]}>No!</Text>;
	// }
}
