
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface PropsButton {
    title: string | number;
    onPress?:() => void;
    propsBackGroundColor?: string;
    propsTitleColor?: string;



}

export const ButtonTypes = ({ title, propsBackGroundColor, propsTitleColor, onPress }: PropsButton) => {


    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.2}
            style={[styles.styleButton,
            {
                backgroundColor: propsBackGroundColor ? propsBackGroundColor : "#000000"
            }
            ]}
        >
            <Text style={[styles.text,
            {
                color: propsTitleColor ? propsTitleColor : "#000"
            }]}>
                {title}

            </Text>
        </TouchableOpacity>
    )
}
