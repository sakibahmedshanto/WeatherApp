import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LocationSearch = ({ onLocationChange }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onLocationChange(input);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
});
