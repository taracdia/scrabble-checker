import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#999",
		backgroundColor: "black",
		padding: 20,
		paddingTop: 60,
		justifyContent: "space-between",
	},
	white: {
		color: "white",
	},
	logo: {
		width: 115,
		height: 32,
	},
	loader: {
		width: 200,
		height: 200,
	},
	border: {
		borderWidth: 1,
		borderColor: "red",
	},
	invalid: {
		color: "red",
	},
	success: {
		color: "green",
	},
	text: {
		fontSize: 30,
	},
	hzCenter: {
		alignItems: "center",
	},
	fitToText: {
		alignSelf: "flex-start",
	},
	button: {
		backgroundColor: "magenta",
	},
	searchInput: {
		flexDirection: "row",
		marginHorizontal: 10,
	},
	vCenterContent: {
		justifyContent: "center",
	},
	fillSpace: {
		flexGrow: 1,
	},
	bold: {
		fontWeight: "bold",
	},
});

export default Styles;
