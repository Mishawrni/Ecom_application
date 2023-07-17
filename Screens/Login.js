import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import react, { useState } from 'react';
import { Blur } from 'expo-blur';

function loginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pastel-phone-colored-donuts-qntl80cqjm8pdpxs.jpg')}
        style={styles.bg_image}>
        <Text style={styles.welcomeText}> Login to your account!</Text>

        <TextInput
          style={styles.userInput}
          placeholder="Enter your username here"
          onChangeText={(username) => setUsername(username)}></TextInput>
        <TextInput
          style={styles.userInput}
          placeholder="Enter your password here"
          onChangeText={(password) => setPassword(password)}></TextInput>

        <TouchableOpacity
          onPress={() => {
            var usrname = username;
            var usrpassword = password;

            if (usrname == 'Misho' && usrpassword == '1234') {
              navigation.navigate('Home');
            } else {
              Alert.alert('Not match');
            }
          }}>
          <Text style={styles.loginBtn}>Login to account</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>All rights received 2023 @DoDonuts</Text>
      </ImageBackground>
    </View>
  );
}
export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg_image: {
    flex: 1,
    justifyContent: 'right',
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    blur: 10,
  },

  welcomeText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  userInput: {
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 3,
    backgroundColor: '#CDB4DB',
    opacity: 20,
    marginTop: 20,
  },
  footer: {
    fontWeight:'bold',
    marginTop:230,
    fontSize: 13,
    textAlign: 'center',
    color:'black'
  },
  loginBtn: {
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 3,
    backgroundColor: '#A2D2FF',
    marginTop: 20,
  },
});
//export default loginScreen;
