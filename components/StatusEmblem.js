import React from "react";
import { StyleSheet, Text } from "react-native";

export default function StatusEmblem({
	hasFirstSearch,
	isError,
	isLoading,
	isWord,
}) {
	if (!hasFirstSearch) {
		return null;
	} else if (isError) {
		return <Text style={styles.text}>Error</Text>;
	} else if (isLoading) {
		return <Text style={styles.text}>Loading</Text>;
	} else if (isWord) {
		return <Text style={styles.text}>Yes!</Text>;
	} else {
		return <Text style={styles.text}>No!</Text>;
	}
}

const styles = StyleSheet.create({
	text: {
		color: "#fff",
	},
});
