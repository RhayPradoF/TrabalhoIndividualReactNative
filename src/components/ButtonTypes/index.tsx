
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface PropsButton {
    title: string | number;
    propsBackGroundColor?: string;
    propsTitleColor?: string;
    handleFunnction: () => void;


}

export const ButtonTypes = ({ title, propsBackGroundColor, propsTitleColor, handleFunnction }: PropsButton) => {


    return (
        <TouchableOpacity
            onPress={handleFunnction}
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
