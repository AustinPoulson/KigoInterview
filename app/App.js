import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const validationCases = [
  {text: '• 8 characters', regex: /^{8,}$/}, 
  {text: '• 1 uppercase letter', regex: /^{A-Z}$/},
  {text: '• 1 lowercase letter', regex: ''},
  {text: '• 1 number', regex: ''},
  {text: '• 1 special character', regex: ''},
]

function ListItem({text, good}) {
  console.log(text);
  return (
    <Text style={good ? styles.blueText : styles.grayText}>{text}</Text>
  );
}

function PasswordInput({title, good, onChangeText=()=>{}}) {
  return (
    <TextInput
      placeholder={title}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

export default function App() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create a password</Text>
      <Text style={[styles.subHeaderText, styles.grayText]}>Create a password</Text>
      <FlatList 
        data={validationCases}
        style={styles.validationList}
        key={validationCases}
        keyExtractor={(item) => item}
        renderItem={({item}) => {return <ListItem text={item} />}}
      />
      <PasswordInput title='Password'/>
      <PasswordInput title='Confirm Password' />
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    padding: 20,
  },
  headerText: {
    fontSize: 35
  },
  subHeaderText: {
    marginTop: 5,
  },
  grayText: {
    fontSize: 15,
    color: '#777777',
  },
  blueText: {
    fontSize: 15,
    color: '#4411dd',
  },
  validationList: {
    marginTop: 10,
  },
  input: {
    padding: 5,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#777777',
    marginTop: 15
  },
  continueButton: {
    padding: 5,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: '#4411dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 25,
  }
});
