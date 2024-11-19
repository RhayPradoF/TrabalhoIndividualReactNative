// import { Dimensions, StyleSheet } from "react-native";
// const { width } = Dimensions.get('window');
// //esse comando de const serve para que o app se adapte ao tipo de
// // tela que ele vai rodar e não fique vasando ou saindo da tela 


// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',

//   },

//   estiloTexto: {
//     fontSize: width < 767 ? 50 : 70,
//     fontWeight: "bold",
//     color:"#f9063c"
//   },

//   boxForms: {
//     width:'90%', 
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: "#99999999", 
//     //"#00000090" serve para dar transparência ao bloco
//     paddingVertical:20, 
//     paddingHorizontal:20, 
//     gap:10, 
//     opacity:0.9,
      
//   },

//   botton:{
//     width: "100%",
//     height: 60,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   avatarImage:{
//     width:200, 
//     height:200, 
//     borderRadius:100,
//   },

//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     width:"100%", 
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   containerPaises: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginBottom: 20,
//   },
// });

import { Platform, StyleSheet } from 'react-native';
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 10, // Reduzido para aproximar o texto da status bar
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3a9687',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  formContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryInputContainer: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryInputText: {
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    width: '100%',
    position: 'absolute',
    top: 60, // Ajuste conforme necessário
    left: 0,
    zIndex: 10,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    height: 150,
    width: '100%',
  },
  phoneInput: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  smsDisclaimer: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
