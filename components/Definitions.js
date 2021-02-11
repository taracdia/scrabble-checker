import React from "react";
import { Text, View, ScrollView } from "react-native";
import Styles from "../Styles";

export default function Definitions({
	hasFirstSearch,
	isWord,
	isLoading,
	isError,
	dictDef,
}) {
	if (!hasFirstSearch || !isWord || isLoading || isError) {
		return null;
	}

	const DefList = () => {
		if (dictDef.length == 0) {
			return (
				<Text style={[Styles.white, Styles.text]}>
					No definitions found
				</Text>
			);
		} else {
			return (
				<ScrollView>
					{dictDef.map(def => (
						<Text
							style={[Styles.white, Styles.text, Styles.padding]}
							key={def.id}
						>
							{def.text}
						</Text>
					))}
				</ScrollView>
			);
		}
	};

	return (
		<View style={Styles.flex}>
			<Text style={[Styles.white, Styles.text]}>Definitions:</Text>
			<DefList />
		</View>
	);
}
