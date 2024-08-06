import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bergere from './pages/products/Bergere';
import CornerSeat from './pages/products/CornerSeat';
import Sofa from './pages/products/Sofa';

import Login from './pages/Login';

import SignUp from './pages/SignUp'

import MemberInfo from './pages/MemberInfo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProductTab = () => {
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false}}>
      <Tab.Screen name='Koltuklar' component={Sofa} />
      <Tab.Screen name='Köşe Takımları' component={CornerSeat} />
      <Tab.Screen name='Berjerler' component={Bergere} />
    </Tab.Navigator>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
      headerShown: false}}>
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='SignUpScreen' component={SignUp} />
        <Stack.Screen name='Products' component={ProductTab} />
        <Stack.Screen name='MemberInfoScreen' component={MemberInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

