import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        height:70,
        marginVertical:5,
        marginHorizontal:10,
        flexDirection:"row",
        alignItems:"stretch",


    },
    image:{
        width:60,
        height:60,
        aspectRatio:1,
        marginRight:10,
        borderRadius:30,
    },

    content:{
        flex:1,
        borderBottomColor:"lightgray",
        borderBottomWidth:StyleSheet.hairlineWidth,

    },

    row:{
        marginBottom:5,
        flexDirection:"row",
    },

    name:{
        flex: 1,
        fontWeight:"600",



    },
    subtitle:{
        color:"gray",

    },


});
