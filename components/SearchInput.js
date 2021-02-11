import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { REACT_APP_DICTIONARY_API_KEY } from "@env";

import Styles from "../Styles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput({
	possibleWord,
	setPossibleWord,
	clickButton,
}) {
	return (
		//TODO: make it so that you can press enter and the search happens
		<View style={[Styles.searchInput]}>
			<TextInput
				placeholder="Guess here"
				onChangeText={text => setPossibleWord(text)}
				defaultValue={possibleWord}
				placeholderTextColor={"gray"}
				style={[
					Styles.white,
					Styles.text,
					Styles.fillSpace,
					{ borderColor: "gray", borderWidth: 1 },
				]}
			/>

			<TouchableOpacity
				onPress={clickButton}
				style={[Styles.button, Styles.vCenterContent]}
			>
				<FontAwesomeIcon
					icon={faSearch}
					size={30}
					style={[Styles.white, { margin: 8 }]}
				/>
			</TouchableOpacity>
		</View>
	);
}
