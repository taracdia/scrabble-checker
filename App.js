import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	Image,
	Linking,
	TouchableHighlight,
	Keyboard,
} from "react-native";
import { REACT_APP_DICTIONARY_API_KEY } from "@env";

export default function App() {
	const [dictDef, setDictDef] = React.useState([]);
	const [possibleWord, setPossibleWord] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isError, setIsError] = React.useState(false);
	const [isWord, setIsWord] = React.useState(false);
	//This is so that some items are hidden until the first search
	const [hasFirstSearch, setHasFirstSearch] = React.useState(false);

	const dummyButton = () => {
		const dummyVals = [
			{
				id: "B5042200-1",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text: "A formal gathering for social dancing.",
				sequence: "1",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042200-2",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text: "An extremely enjoyable time or experience.",
				sequence: "2",
				score: 0,
				labels: [
					{
						text: "Informal",
						type: "fld",
					},
				],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [
					{
						text: "We had a ball during our vacation.",
					},
				],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-1",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				sequence: "1",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-2",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text: "A spherical object or entity.",
				sequence: "2",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [
					{
						text: "a steel ball.",
					},
				],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-3",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text: "A spherical or almost spherical body.",
				sequence: "3",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [
					{
						text: "a ball of flame.",
					},
				],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-4",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				sequence: "4",
				score: 0,
				labels: [
					{
						text: "Sports",
						type: "fld",
					},
				],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-5",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text:
					"Any of various movable and round or oblong objects used in various athletic activities and games.",
				sequence: "5",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-6",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text:
					"Such an object moving, thrown, hit, or kicked in a particular manner.",
				sequence: "6",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [
					{
						text: "a low ball; a fair ball.",
					},
				],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-7",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text:
					"A game, especially baseball or basketball, played with such an object.",
				sequence: "7",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
			{
				id: "B5042100-8",
				partOfSpeech: "noun",
				attributionText:
					"from The American Heritage® Dictionary of the English Language, 5th Edition.",
				sourceDictionary: "ahd-5",
				text:
					"A pitched baseball that does not pass through the strike zone and is not swung at by the batter.",
				sequence: "8",
				score: 0,
				labels: [],
				citations: [],
				word: "ball",
				relatedWords: [],
				exampleUses: [],
				textProns: [],
				notes: [],
				attributionUrl: "https://ahdictionary.com/",
				wordnikUrl: "https://www.wordnik.com/words/ball",
			},
		];

		const dummyVals2 = dummyVals.reduce((result, val) => {
			if (val.text) {
				result.push(val.text);
			}
			return result;
		}, []);

		setDictDef(dummyVals2);
	};

	const clickButton = () => {
		//TODO: unhide statusemblem, hide keyboard
		setHasFirstSearch(true);
		Keyboard.dismiss();
		//Reset states
		setDictDef([]);
		setIsLoading(true);
		setIsError(false);
		setIsWord(false);

		fetch(
			`https://api.wordnik.com/v4/word.json/${possibleWord}/scrabbleScore?api_key=${REACT_APP_DICTIONARY_API_KEY}`
		)
			.then(res => res.json())
			.then(res => {
				if (res.cod == 200) {
					//This means it is a valid scrabble word
					setIsWord(true);
					//Retrieve and display the definition
					findDefinition();
				} else if (res.cod == 404) {
					//This means it isn't a valid scrabble word
					setIsLoading(false);
				} else {
					throw new Error();
				}
			})
			.catch(err => {
				setIsError(true);
				setIsLoading(false);
				console.log(err.message);
			});
	};

	const findDefinition = () => {
		fetch(
			`https://api.wordnik.com/v4/word.json/${possibleWord}/definitions?limit=10&includeRelated=false&useCanonical=true&includeTags=false&api_key=${REACT_APP_DICTIONARY_API_KEY}`
		)
			.then(res => res.json())
			.then(res => {
				if (res.cod == 200) {
					setIsLoading(false);
					//Using reduce rather than map so that undefined values are not included
					setDictDef(
						res.reduce((result, val) => {
							if (val.text) {
								result.push(val.text);
							}
							return result;
						}, [])
					);
				} else if (res.cod == 404) {
					//Not found in dictionary
					setDictDef(["There is no definition found."]);
				} else {
					throw new Error();
				}
			})
			.catch(err => {
				setIsError(true);
				setIsLoading(false);
				console.log(err.message);
			});
	};

	const StatusEmblem = () => {
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
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Enter here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
				style={styles.text}
			/>
			<Button title="search" onPress={() => dummyButton()}></Button>
			<StatusBar style="auto" />
			<StatusEmblem />
			<Text style={styles.text}>Definitions:</Text>
			{dictDef.map(def => (
				<Text style={styles.text}>{def}</Text>
			))}
			<Text style={styles.text}>
				https://www.wordnik.com/words/{possibleWord}
			</Text>
			<TouchableHighlight
				onPress={() => Linking.openURL("https://wordnik.com")}
			>
				<Image
					source={require("./assets/wordnik.png")}
					style={styles.logo}
					resizeMode="contain"
				/>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
	logo: {
		width: 115,
		height: 32,
	},
});
