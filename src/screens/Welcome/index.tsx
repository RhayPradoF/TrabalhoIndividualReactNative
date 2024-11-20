import { Alert, Button, Image, ImageBackground, Keyboard, Linking, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { styles } from './style';
import { ButtonTypes } from "../../components/ButtonTypes";
import ImagePreLogin from "../../assets/assets/welcome.png";
import { ButtonComp } from "../../components/ButtonComp";
import { useNavigation } from "@react-navigation/native";


export default function Welcome() {

    const navigation = useNavigation();

    const onGoToLogin = () => {

        navigation.navigate('Login');

    }

    return (

        <View style={styles.container}>
            <View style={styles.boxForms}>
                <Image style={styles.avatarImage} source={ImagePreLogin} alt="Imagem do pré login" />
                <Text style={styles.estiloTexto}>Welcome to WhatsApp Clone</Text>

               <View style={styles.boxFormsText}>
                    <Text style={styles.textecenter}>Read our
                        <Text style={styles.link} onPress={() => Linking.openURL('https://www.exemplo.com')}> Privacy Policy.</Text>{' '}
                        <Text>Tap "Agree and continue" to accept the </Text>
                        <Text
                        style={styles.link}
                        onPress={() => Linking.openURL('https://www.exemplo.com')}>
                            Terms of Service.</Text>{' '}
                        </Text>
             </View>
                        <ButtonComp handleFunction={onGoToLogin}
                        propsBackgroundColor="#fff"
                        propsTitleColor="blue"
                        title="Agree & continue"  />
            </View>


        </View>

    )
}

