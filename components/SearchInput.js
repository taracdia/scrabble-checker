import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Button, TextInput } from "react-native";
import { REACT_APP_DICTIONARY_API_KEY } from "@env";

import Styles from "../Styles";
import FontAwesome, {
	SolidIcons,
	RegularIcons,
	BrandIcons,
	parseIconFromClassName,
} from "react-native-fontawesome";

export default function SearchInput({
	possibleWord,
	setPossibleWord,
	clickButton,
}) {
	const parsedIcon = parseIconFromClassName("fab fa-apple");
	return (
		<View style={[Styles.border]}>
			<FontAwesome icon={BrandIcons.android} />
			<TextInput
				placeholder="Enter here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
				style={[Styles.white, Styles.text]}
			/>
			<Button title="search" onPress={clickButton}></Button>
		</View>
	);
}
