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
  ScrollView,
} from 'react-native';
import { styles } from './style';
import { ButtonTypes } from "../../components/ButtonTypes";
import paises from "../../Mock/paises";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!selectedCountry) {
      Alert.alert('Erro', 'Por favor, selecione um país.');
      return;
    }

    if (!phoneNumber) {
      Alert.alert('Erro', 'Por favor, insira seu número de telefone.');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.navigate('Home');
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  const togglePicker = () => setIsPickerVisible(!isPickerVisible);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Verifique seu número</Text>

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
                  {paises.map((pais) => (
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

            <ButtonTypes
              onPress={handleLogin}
              title="Avançar"
              propsTitleColor="#fff"
              propsBackGroundColor="#1DB954"
            />

            <Text style={styles.smsDisclaimer}>
              Tarifas de SMS de sua operadora podem ser aplicadas.
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
