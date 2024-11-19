import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
//esse comando de const serve para que o app se adapte ao tipo de
// tela que ele vai rodar e não fique vasando ou saindo da tela 


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  estiloTexto: {
    fontSize: width < 767 ? 20 : 20,
    justifyContent:"center",
    fontWeight: "bold",
    color:"#000", 
    marginTop:50,
    marginLeft:30,
  },

  boxForms: {
    width:'90%', 
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#99999999", 
    //"#00000090" serve para dar transparência ao bloco
    paddingVertical:20, 
    paddingHorizontal:20, 
    gap:10, 
    opacity:0.9,
      
  },

  botton:{
    width: "100%",
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarImage:{
    width:300, 
    height:300, 
    borderRadius:200,
    justifyContent:"center",
    marginTop:120,
    marginLeft:50, 
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width:"100%", 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text:{
    fontStyle:"normal",
    fontSize:16, 
    width:20,
    height:20, 
    color:"black",
  },

  link:{
    color: 'blue',
  },
  boxFormsText:{
      alignItems:"center",
      justifyContent:"center", 
      fontSize:16, 

    
  },

  textecenter:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:20, 
    marginLeft:30,
    fontWeight:"300", 
    fontSize:16,

  }
});