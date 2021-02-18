import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";

import Styles from "../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput({
	possibleWord,
	setPossibleWord,
	clickButton,
}) {
	return (
		<View style={Styles.searchInput}>
			<TextInput
				placeholder="Guess here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
				placeholderTextColor={"gray"}
				style={[Styles.white, Styles.text, Styles.textInput]}
				onSubmitEditing={clickButton}
				autoCapitalize={"none"}
			/>
			<TouchableOpacity onPress={clickButton} style={Styles.button}>
				<FontAwesomeIcon
					icon={faSearch}
					size={30}
					style={[Styles.white]}
				/>
			</TouchableOpacity>
		</View>
	);
}
