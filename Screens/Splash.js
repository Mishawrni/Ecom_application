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
} from 'react-native';
import react, { useState } from 'react';

function loginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/pastel-phone-colored-donuts-qntl80cqjm8pdpxs.jpg')}
      style={styles.bg_image}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}> welcome to DoDonuts!</Text>

        <Text style={styles.middleText}>
          Your Sweetest Donut Delivery 🍩🚚
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.register}>Login to account!!</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>All rights received 2023 @DoDonuts</Text>
      </View>
    </ImageBackground>
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
    opacity: 0.8,
  },

  welcomeText: {
    color:'#09A2D7',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    backgroundColor: '#FED85A',
    borderRadius: 20,
    borderTopStartRadius: 1,
    borderTopEndRadius: 1,
  },

  middleText: {
    color:'#09A2D7',
    fontWeight: 'italic',
    fontSize:17,
    marginVertical: 100,
    textAlign: 'center',
    backgroundColor: '#FED85A',
    borderRadius:20,
    marginHorizontal:30
  },

  register: {
    color:'#FED85A',
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    backgroundColor: '#09A2D7',
    marginTop: 10,
    paddingVertical: 10,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderStyle: 'dashed',
    borderColor: '#FED85A',
    borderRadius:50
  },
  footer: {
    fontWeight:'bold',
    margin:30,
    fontSize: 13,
    textAlign: 'center',
    color:'black'
  },
});
