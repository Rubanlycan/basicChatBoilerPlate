import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, Text, TextInput, StyleSheet, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 10}}>
      <Text style={styles.title}>Suprfam (Chat Sample)</Text>
      <Text>Username</Text>
      <TextInput style={styles.textInput} />
      <Text style={{marginTop: 10}}>Mobile No.</Text>
      <TextInput
        maxLength={10}
        keyboardType={'number-pad'}
        style={styles.textInput}
      />
      <Button onPress={() => navigation.navigate('Users')} title={'Login'} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 0.8,
    borderRadius: 5,
    marginBottom: 10,
  },
});
export default HomeScreen;
