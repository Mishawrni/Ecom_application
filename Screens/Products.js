import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

function LoginScreen(navigation) {
  const data = [
    {
      id: 1,
      title: 'Mocha Donut',
      imageSource: require('../assets/baked-mocha-donuts.jpg'),
      price: '300 Each',
    },
    {
      id: 2,
      title: 'Butternut Donut balls',
      imageSource: require('../assets/choco-butternut-donut-balls.jpg'),
      price: '120 Each',
    },
    {
      id: 3,
      title: 'Chocolate Donut',
      imageSource: require('../assets/chocolate-donuts.jpg'),
      price: '250 Each',
    },
    {
      id: 4,
      title: 'Custard Donuts',
      imageSource: require('../assets/Custard-Donuts.jpg'),
      price: '200 Each',
    },
    {
      id: 5,
      title: 'Galaxy-donut',
      imageSource: require('../assets/galaxy-donut 1.jpg'),
      price: '300 Each',
    },
    {
      id: 6,
      title: 'Dark chocolate',
      imageSource: require('../assets/dark-chocolate.jpg'),
      price: '250 Each',
    },
    {
      id: 7,
      title: 'Oreo Donut',
      imageSource: require('../assets/oreo-donut.jpg'),
      price: '350 Each',
    },
    {
      id: 8,
      title: 'Original Donut',
      imageSource: require('../assets/original-donut.jpg'),
      price: '200 Each',
    },
    {
      id: 9,
      title: 'Strawberry Donut',
      imageSource: require('../assets/strawberry-glazed-donuts-1.jpg'),
      price: '350 Each',
    },
    {
      id: 10,
      title: 'Sprinkle balls',
      imageSource: require('../assets/sprinkle balls.jpg'),
      price: '150 Each',
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.bgImage}>
      <Text style={styles.topText}>choose from below..</Text>
      <View>
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={({ item }) => (
            <View>
              <Image source={item.imageSource} style={styles.contentImages} />
              <Text style={styles.products}>{item.title}</Text>
              <Text style={styles.products}>{item.price}</Text>
            </View>
          )}
        />
      </View>
      </ImageBackground>
      </SafeAreaView>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },

  topText: {
    fontSize: 20,
    textAlign: 'center',
  },
  contentImages: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth:2
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  products: {
    borderWidth:2,
    borderRadius:3,
    backgroundColor:'white',
    opacity:0.7,
    textAlign:'center'
  },
  bgImage:{
    height:'100%',
    width:'100%',
    blur:30,
    
  }
});
