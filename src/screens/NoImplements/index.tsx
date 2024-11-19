import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './stylesNI';

export const NoImplements = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Tela não Implementada</Text>
      <Image
      source={require('../../assets/capivara.png')}
      resizeMode='contain'
      style={style.image}
      />
    </View>
  )
}
