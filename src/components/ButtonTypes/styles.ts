import { Dimensions, StyleSheet, Platform } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {
    width: "50%",
    height: Platform.OS ==="android"? 50 : 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:40, 
    marginTop:100, 
    marginHorizontal:30, 
  },

  text: {
    color: "#fff",
    fontSize: width < 767 ? 20 : 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});