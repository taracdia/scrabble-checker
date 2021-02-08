import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { REACT_APP_DICTIONARY_API_KEY } from "@env";

export default function App() {
	const [dictDef, setDictDef] = React.useState("");
	const [possibleWord, setPossibleWord] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isWord, setIsWord] = React.useState(false);

	const getDictionaryDefinition = () => {
		//TODO: make async/await
		const ref = "collegiate";
		const uri = `https://dictionaryapi.com/api/v3/references/${ref}/json/${possibleWord}?key=${REACT_APP_DICTIONARY_API_KEY}`;
		// fetch(uri);
		console.log(uri);
	};

	const StatusEmblem = () => {
		//TODO: only make visible if search button has been clicked
		if (isLoading) {
			return <Text>Loading</Text>;
		} else if (isWord) {
			return <Text>Yes!</Text>;
		} else {
			return <Text>No!</Text>;
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Enter here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
			/>
			<Text>{REACT_APP_DICTIONARY_API_KEY}</Text>
			<Button
				title="search"
				onPress={() => getDictionaryDefinition()}
			></Button>
			<StatusBar style="auto" />
			<StatusEmblem />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
