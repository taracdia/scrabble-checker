import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, TextInput, Keyboard } from "react-native";

import Attribution from "./components/Attribution";
import StatusIndicator from "./components/StatusIndicator";
import Definitions from "./components/Definitions";
import SearchInput from "./components/SearchInput";
import { REACT_APP_SCRABBLE_API_KEY, REACT_APP_DICTIONARY_API_KEY } from "@env";

import Styles from "./Styles";

export default function App() {
	const [dictDef, setDictDef] = React.useState([]);
	const [possibleWord, setPossibleWord] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isError, setIsError] = React.useState(false);
	const [isWord, setIsWord] = React.useState(false);
	//This is so that some items are hidden until the first search
	const [hasFirstSearch, setHasFirstSearch] = React.useState(false);

	const clickButton = () => {
		if (!possibleWord) {
			return;
		}
		setHasFirstSearch(true);
		Keyboard.dismiss();
		//Reset states
		setDictDef([]);
		setIsLoading(true);
		setIsError(false);
		setIsWord(false);

		checkWord();
	};

	const checkWord = async () => {
		fetch(
			`https://api.wordnik.com/v4/word.json/${possibleWord}/scrabbleScore?api_key=${REACT_APP_SCRABBLE_API_KEY}`
		)
			.then(res => res.json())
			.then(res => {
				if (res.value) {
					//This means it is a valid scrabble word
					setIsWord(true);
					//Retrieve and display the definition
					getDef();
				} else if (res.statusCode == 404) {
					//This means it isn't a valid scrabble word
					setIsLoading(false);
				} else {
					console.log(res.message)
					throw new Error();
				}
			})
			.catch(err => {
				setIsError(true);
				setIsLoading(false);
				console.log(err.message);
			});
	};

	const getDef = async () => {
		fetch(
			`https://dictionaryapi.com/api/v3/references/collegiate/json/${possibleWord}?key=${REACT_APP_DICTIONARY_API_KEY}`
		)
			.then(res => res.json())
			.then(function (response) {
				const containerArray = response.reduce(function (
					result,
					element
				) {
					if (element.shortdef) {
						result = [...result, ...element.shortdef];
					}
					return result;
				},
				[]);

				setIsLoading(false);

				setDictDef(containerArray);
			})
			.catch(err => {
				setIsError(true);
				setIsLoading(false);
				console.log(err.message);
			});
	};

	return (
		<View style={[Styles.container, Styles.flex]}>
			<SearchInput
				possibleWord={possibleWord}
				setPossibleWord={setPossibleWord}
				clickButton={clickButton}
			/>
			<StatusIndicator
				isError={isError}
				isLoading={isLoading}
				isWord={isWord}
				hasFirstSearch={hasFirstSearch}
			/>
			<Definitions
				hasFirstSearch={hasFirstSearch}
				dictDef={dictDef}
				isWord={isWord}
				isError={isError}
				isLoading={isLoading}
			/>
			<Attribution
				possibleWord={possibleWord}
				hasFirstSearch={hasFirstSearch}
			/>
			<StatusBar style="auto" />
		</View>
	);
}
