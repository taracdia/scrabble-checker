import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	// Reused styles
	flex: {
		flex: 1,
	},
	hzCenter: {
		alignItems: "center",
	},
	text: {
		fontSize: 30,
	},
	white: {
		color: "white",
	},
	//Single use styles
	container: {
		backgroundColor: "black",
		padding: 20,
		paddingTop: 60,
		justifyContent: "space-between",
	},
	//Search input
	button: {
		backgroundColor: "magenta",
		borderBottomRightRadius: 5,
		borderTopRightRadius: 5,
		padding: 8,
		justifyContent: "center",
	},
	searchPage: {
		flexDirection: "row",
		marginHorizontal: 10,
	},
	textInputBox: {
		flexGrow: 1,
		flexDirection: "row",
		borderColor: "gray",
		borderWidth: 1,
		borderBottomLeftRadius: 5,
		borderTopLeftRadius: 5,
		paddingHorizontal: 20,
		justifyContent: "space-between",
	},
	//StatusIndicator
	bigText: {
		fontSize: 60,
	},
	invalid: {
		color: "red",
	},
	loader: {
		width: 200,
		height: 200,
	},
	status: {
		fontWeight: "bold",
		alignSelf: "center",
	},
	success: {
		color: "green",
	},
	//Definitions
	padding: {
		padding: 5,
	},
	//Attribution
	wordnik: {
		width: 115,
		height: 32,
	},
	mw: {
		width: 50,
		height: 50,
	},
	attRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default Styles;
