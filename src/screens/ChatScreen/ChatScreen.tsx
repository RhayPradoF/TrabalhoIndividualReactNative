import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    SectionList
} from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { styles } from "./styles";
import bgPng from '../../assets/pattern.png';
import mensagens from "../../data/messages.json";
import { SafeAreaView } from 'react-native-safe-area-context';
import groupBy from "lodash.groupby";
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';



export const ChatScreen = () => {

    const [message, setMessage] = useState('');
    const [listMsg, setListMsg] = useState([]);
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(()=>{
        const groupedList = Object.values(
            groupBy(mensagens, function(n) {
                return n.createdAt.substring(0,20);
            }),
    );
    var data = [];
    groupedList.map(dia =>{
        let section = {
            title: format(new Date(dia[0].createdAt), "PPP", {locale: ptBR}),
            data:[... dia],
        }
        data.push(section);
    });
    setListMsg(data);
    }, []);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                </TouchableOpacity>
            ),
            headerTitle: route.params.name,
        });
    }, [navigation, route.params.name]);



    // Enviar nova mensagem
    const sendMessage = () => {
        if (message.trim()) {
            console.log('Mensagem Enviada:', message);
            setMessage('');
        }
    };

    function renderMsg(item){
            if(item.from === 'me'){
                return(
                    <View style={styles.forMe}>
                    <Text style={styles.msgText}>{item.text}</Text>
                    <View>
                    <Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text>
                    </View>
                    </View>
                    )

            } else{
                return(
                <View style={styles.fromMe}>
                <Text style={styles.msgText}>{item.text}</Text>
                <View style={{flexDirection:"row", alignItems:"baseline", alignSelf:"flex-end"}}>
                    <MaterialCommunityIcons  name='check-all' size={24} color="royalblue" />
                <Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text>
                </View>
                </View>
                )
            }

    }

    return (
        <ImageBackground resizeMode='cover' source={bgPng} style={styles.containerImg}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content} />
                <SectionList
                    sections={listMsg}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => renderMsg(item)}
                    renderSectionHeader={({ section }) => (
                        <Text>{section.text}</Text>
                    )}
                    />


                <KeyboardAvoidingView
                    keyboardVerticalOffset={100}
                    behavior='padding'
                    enabled={Platform.OS === 'android'}>
                    {/* /* style={styles.footer} */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#E3D5F6",
                            /* marginRight: 20 */
                        }}>
                        <TextInput style={styles.input}
                        placeholder="Digite sua mensagem..."  />
                        <TouchableOpacity style={styles.bottomsend} onPress={sendMessage} >
                            <MaterialIcons
                            name="send" size={26} color="black" />
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>

            </SafeAreaView>
     </ImageBackground>
    );
};
