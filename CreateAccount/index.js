import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { } from './styles';
import PasswordInputText from 'react-native-hide-show-password-input';

import { AuthContext } from '../context';

import firebase from 'firebase';

export default CreateAccount = () => {

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <PasswordInputText
          placeholder="Digite sua senha"
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Criar Conta" onPress={() => handleSignUp()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input_auth: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    padding: 4
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  }
});

