import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { REACT_APP_DICTIONARY_API_KEY } from "@env";

export default function Definitions({ hasFirstSearch, dictDef }) {
	if (!hasFirstSearch) {
		return null;
	}

	const DefList = () => {
		if (dictDef.length == 0) {
			return <Text style={styles.text}>No definitions found</Text>;
		} else {
			return (
				<View>
					{dictDef.map(def => (
						<Text style={styles.text}>{def}</Text>
					))}
				</View>
			);
		}
	};

	return (
		<View>
			<Text style={styles.text}>Definitions:</Text>
			<DefList />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "#fff",
	},
});
