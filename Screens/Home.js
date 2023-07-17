import * as React from 'react';
import{Text,Image,View,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';

function homePage ({navigation}){
  return(
  
  <ImageBackground style={styles.bgImage} source={require('../assets/background.jpg')}>
  <View style={styles.container}>
  <Text style={styles.homeText}>
  Explore our wide range Of Donuts range and choose your favourites..
  </Text>

  <View style={styles.one}>
  <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
  <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>Get yours now</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.two}>
  <TouchableOpacity onPress={()=>navigation.navigate('Aboutus')}>
  <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>About us</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.three}>
  <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
  <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>Contact us</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.three}>
  <TouchableOpacity onPress={()=>navigation.navigate('Termsandconditions')}>
  <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>Terms and conditions</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.three}>
  <TouchableOpacity onPress={()=>navigation.navigate('Delivery')}>
  <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>Product delivery policies</Text>
  </TouchableOpacity>
  </View>

  </View>
  </ImageBackground>
  
  )
}
export default homePage;

const styles=StyleSheet.create({
homeText:{
  fontSize:20,
  fontWeight:'bold',
  textAlign: 'center',
  color:'#F35393'
},
container:{
  flex:1,
  justifyContent:'space-around',
},
bgImage:{
  width:'100%',
  height:'100%',
  //opacity:0.5
},
one:{
  //flex:0.3,
  backgroundColor:'#e6f2ff',
  borderWidth:2,
  borderTopLeftRadius:20,
  borderTopRightRadius:20,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20
},

two:{
  //flex:0.3,
  backgroundColor:'#ffe6e6',
  borderWidth:2,
  borderTopLeftRadius:20,
  borderTopRightRadius:20,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20
},

three:{
  //flex:0.3,
  backgroundColor:'#e6ffe6',
  borderWidth:2,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
  borderTopRightRadius:20,
  borderTopLeftRadius:20
}
})