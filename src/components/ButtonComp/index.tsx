import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { PropsButton } from "../ButtonTypes/type";

export const ButtonComp = ({ title, propsBackgroundColor, propsTitleColor, handleFunction }: PropsButton) => {

    return (
        <TouchableOpacity
            onPress={handleFunction}
            activeOpacity={0.8}
            style={[styles.styleButton, {
                backgroundColor: propsBackgroundColor ? 
                    propsBackgroundColor : "red"
            }]} >
            <Text style={styles.styleText}>{title ? title : "Entrar"}

            </Text>

            <Text style={[styles.styleText,
            {
                color: propsTitleColor ? propsTitleColor : "#000"
            }]}>
                {title}

            </Text>
        </TouchableOpacity>

    )
}
