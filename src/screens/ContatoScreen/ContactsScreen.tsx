import { View, Text, FlatList} from 'react-native'
import React from 'react'
import { styles } from './styles'
import  chats  from "../../data/chats.json";
import { ContactsListItem } from "../../components/ContactsListItem";

export const ContactsScreen = () => {
  return (
  <FlatList
    data={chats}
    renderItem={({item}) => <ContactsListItem user={item.user}/>}
    showsVerticalScrollIndicator={false}
    style={styles.container}
    contentContainerStyle={{paddingBottom:30, }}


  />
  )
}

