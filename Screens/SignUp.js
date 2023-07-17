import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

function signupPage ({navigation}){
  return(
    <View style={styles.viewStyle}>
    <Text style={styles.welcometext}>Signup to join our community</Text>
    <Text style={styles.username}>User name</Text>
    <TextInput style={styles.inputUser} placeholder="Enter your name"/>
    <Text>Email address</Text>
    <TextInput style={styles.inputUser}placeholder="Enter email"/>
    <Text>Date Of Birth</Text>
    <TextInput style={styles.inputUser} placeholder="Enter DOB"/>
    <Text>Password</Text>
    <TextInput style={styles.inputUser} placeholder="Enter password"/>
    <Text>Confirm Password</Text>
    <TextInput style={styles.inputUser} placeholder="Confirm password"/>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.signinbtn}>Join community</Text>
    </TouchableOpacity>
    </View>
  )
} 
export default signupPage;

const styles=StyleSheet.create({
  viewStyle:{
    flex:1,
    backgroundColor:'#E5C8F6'
  },
  
  welcometext:{
    justifyContent:'center',
    textAlign:'right',
    fontSize:25
  },
  inputUser:{
    borderWidth:1,
    borderColor:'black',
    alignItems:'center'
  },
  signinbtn:{
    borderWidth:2,
    borderStyle:'dotted',
    borderRadius:50,
    margin:50,
    backgroundColor:'#09A2D7'
  }
})