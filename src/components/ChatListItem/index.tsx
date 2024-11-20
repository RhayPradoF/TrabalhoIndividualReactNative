import { View, Text, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);


export const ChatListItem = ({ chat }) => {

    const navigation = useNavigation();

    const onGoToChat = () => {

        navigation.navigate('Chat', {
            id: chat.id,
            name:chat.user.name,
            });

    };

    return (
        <Pressable
        style={styles.container}
        onPress={onGoToChat}>
            <Image style={styles.image}
            source={{uri: chat.user.image}}/>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>
                        {chat.user.name}
                    </Text>
                    <Text style={styles.subtitle}>
                            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
                    </Text>
                </View>
                <Text numberOfLines={1} style={styles.subtitle}>
                    {chat.lastMessage.text}
                    </Text>

            </View>

        </Pressable>
    )
}
