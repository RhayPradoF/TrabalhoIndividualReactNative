import React, { useState } from 'react';
import {
    Alert,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    ScrollView } from 'react-native';
import { styles } from './style';
import { ButtonTypes } from "../../components/ButtonTypes";
import paises from "../../Mock/paises";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const getPaises = () => {
  return paises;
};

export const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const handleLogin = () => {
    Alert.alert('Login clicado!');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };


const navigation = useNavigation();

const onLoginSuccess = () => {
    if(handleLogin() === true){
        navigation.navigate('Home');
    }
}


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Verifique seu número</Text>

        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.formContainer}>
            <Text style={styles.description}>
              O WhatsApp enviará um SMS para verificar seu número de telefone.
              Insira o código do seu país e seu número de telefone:
            </Text>

            <Text style={styles.label}>Selecione seu país:</Text>

            <TouchableWithoutFeedback onPress={togglePicker}>
              <View style={styles.countryInputContainer}>
                <Text style={styles.countryInputText}>
                  {selectedCountry || 'Selecione...'}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {/* Exibir o Picker quando o usuário clicar */}
            {isPickerVisible && (
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedCountry}
                  onValueChange={(itemValue) => {
                    setSelectedCountry(itemValue);
                    setIsPickerVisible(false);
                  }}
                  style={styles.picker}
                >
                  <Picker.Item label="Selecione..." value="" />
                  {getPaises().map((pais) => (
                    <Picker.Item
                      key={pais.id}
                      label={pais.label}
                      value={pais.value}
                    />
                  ))}
                </Picker>
              </View>
            )}

            <TextInput
              style={styles.phoneInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Seu número"
              keyboardType="numeric"
              maxLength={15}
            />

            <ButtonTypes OnPress={onLoginSuccess}
              handleFunnction={handleLogin}
              title="Avançar"
              propsTitleColor='#fff'
              propsBackGroundColor="#1DB954"
            />

            <Text style={styles.smsDisclaimer}>Tarifas de SMS de sua operadora podem ser aplicadas.</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
