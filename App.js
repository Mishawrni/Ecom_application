import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Products from './Screens/Products';
import Contact from './Screens/Contact';
import Delivery from './Screens/Delivery';
import Aboutus from './Screens/Aboutus';
import Termsandconditions from './Screens/TandC';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="Aboutus" component={Aboutus}/>
        <Stack.Screen name="Delivery" component={Delivery}/>
        <Stack.Screen name="Termsandconditions" component={Termsandconditions}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
