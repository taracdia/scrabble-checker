import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#999",
		padding: 20,
		paddingTop: 40,
		justifyContent: "space-between",
	},
	white: {
		color: "#fff",
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
		borderColor: "#f00",
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
});

export default Styles;
