import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import chats from "../../data/chats.json";
import { ChatListItem } from '../../components/ChatListItem';
import { ContactsListItem } from "../../components/ContactsListItem";



export const ContatoScreen = () => {
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ContactsListItem user={item.user}/>}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    </View>
  )
}

