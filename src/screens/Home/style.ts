import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
//esse comando de const serve para que o app se adapte ao tipo de
// tela que ele vai rodar e não fique vasando ou saindo da tela 


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  estiloTexto: {
    fontSize: width < 767 ? 20 : 50,
    fontWeight: "bold"
  },

});