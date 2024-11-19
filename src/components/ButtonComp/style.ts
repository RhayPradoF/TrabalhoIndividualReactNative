import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {

    width: "100%",
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', 
   
  },

  styleText: { // fiz para alinhar o texto que estava me incomodando
    color: 'white',
    textAlign: 'center',
    fontSize: width < 767 ? 20 : 50,
    alignSelf:"center",
    marginLeft:50,
  }

});