import React from "react";
import { Text, View } from "react-native";
import Styles from "../Styles";

export default function Definitions({ hasFirstSearch, dictDef }) {
	if (!hasFirstSearch) {
		return null;
	}

	const DefList = () => {
		if (dictDef.length == 0) {
			return <Text style={Styles.text}>No definitions found</Text>;
		} else {
			return (
				<View>
					{dictDef.map(def => (
						<Text style={Styles.text}>{def}</Text>
					))}
				</View>
			);
		}
	};

	return (
		<View>
			<Text style={Styles.text}>Definitions:</Text>
			<DefList />
		</View>
	);
}
