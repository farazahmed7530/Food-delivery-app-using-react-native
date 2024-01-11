import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/home';
import addexpense from '../screens/addexpense';
import Restaurantscreen from '../screens/restuantscreen';
import Login from '../components/login';

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
<NavigationContainer>
   <Stack.Navigator initialRouteName="Login">
   <Stack.Screen options={{headerShown: false}} name="home" component={home} />
   <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
   <Stack.Screen options={{headerShown: false}} name="addexpense" component={addexpense} />
   <Stack.Screen options={{headerShown: false}} name="Restaurantscreen" component={Restaurantscreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}