import {
    View,
    Text,
    Image,
    Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const ContactsListItem = ({user}) => {

  return (
    <Pressable
    style={styles.container}
    onPress={() => console.warn("Pressionou no item de lista de contato ")}>
        <Image
        source={{uri: user.image}}
        alt='Imagem de perfil do usuário'
        style={styles.image}/>
        <View style={styles.content}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.subtitle}>{user.status}</Text>
      </View>
    </Pressable>
  )
}

