import React from "react";
import { Text } from "react-native";
import Styles from "../Styles";

export default function StatusEmblem({
	hasFirstSearch,
	isError,
	isLoading,
	isWord,
}) {
	if (!hasFirstSearch) {
		return null;
	} else if (isError) {
		return <Text style={Styles.text}>Error</Text>;
	} else if (isLoading) {
		return <Text style={Styles.text}>Loading</Text>;
	} else if (isWord) {
		return <Text style={Styles.text}>Yes!</Text>;
	} else {
		return <Text style={Styles.text}>No!</Text>;
	}
}
