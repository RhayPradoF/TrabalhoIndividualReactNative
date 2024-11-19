import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';


interface CountryPickerProps {
  getCountries: () => { label: string; value: string }[]; 
};

export function CountryPicker({ getCountries }: CountryPickerProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(''); 

 
  const countries = getCountries(); 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione seu país:</Text>
      <Picker
        selectedValue={selectedCountry} 
        onValueChange={(itemValue) => setSelectedCountry(itemValue)} 
        style={styles.picker}
      >
        <Picker.Item label="Selecione..." value="" />
        {countries.map((country) => (
          <Picker.Item key={country.value} label={country.label} value={country.value} />
        ))}
      </Picker>
    </View>
  );
};
