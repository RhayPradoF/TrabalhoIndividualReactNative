import { Dimensions, StyleSheet } from "react-native";
import {colors} from "../../styles/colors";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        flex:1,

    },

    containerImg:{
        flex:1,
        width:"100%",
    },

    headerText:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
    },
    contentContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

    keyboardAvoidingView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

    input:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        marginBottom:10,
    },

    footer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        marginBottom:10,
        backgroundColor:"#fff",
    },

    bottomsend:{
        position:"absolute",
        right:0,
        backgroundColor:"#fff",
        width:40,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",

    },

    sendButton:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center",
    },

    forMe:{
        backgroundColor: "white",
        padding:10,
        marginVertical:10,
        maxWidth: width * 0.8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        marginLeft: 20,

    },

    fromMe:{
        backgroundColor: colors.green.cor7,
        padding:10,
        marginVertical:10,
        maxWidth: width * 0.8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        marginLeft: width *0.2 - 20,

    },

    hour:{
        fontSize:11,
        color:"#aaa",
        textAlign:"right",
    },

    background: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    lista: {
      flex: 1,
      marginTop: 10,
      paddingHorizontal: 20,
    },
    messageContainer: {
      marginBottom: 10,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    messageText: {
      fontSize: 14,
      color: '#333',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
      },
})
