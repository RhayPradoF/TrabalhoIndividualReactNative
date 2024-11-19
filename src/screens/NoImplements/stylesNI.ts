import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#whitesmoke",
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontSize:18,
        fontWeight:"500",
        color: colors.green["cor4"]


    },

    image:{
        width:"80%",
        aspectRatio:2/1,

    }
});
