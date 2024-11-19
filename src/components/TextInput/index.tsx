import { Text, TextInput } from "react-native";
import { styles } from "./style";

interface propsInput{
    propsPlaceHolder: string;
    typeInput?: boolean; // pode colocar como opcional também passando o ?, mas eu não usei 
    valueInput: string;
    handleFunctionInput: (value: string) => void;

}

export const TextInputField = ({
    handleFunctionInput,
    propsPlaceHolder,
    typeInput,
    valueInput}:propsInput) =>{

    return(
        <TextInput
        // onTextInput={text => "Digite seu email:"}
        onChangeText={handleFunctionInput}
        style={styles.input}
        placeholder={propsPlaceHolder}
        placeholderTextColor={"#000"}
        secureTextEntry={typeInput}
        value={valueInput}

        //como que muda o tipo do teclado para só numerico
        //keyboardType="numeric" 


        />
    )
} 
