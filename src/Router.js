import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Bergere from './pages/products/Bergere';
import CornerSeat from './pages/products/CornerSeat';
import Sofa from './pages/products/Sofa';

import Login from './pages/Login';

import SignUp from './pages/SignUp'

import MemberInfo from './pages/MemberInfo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProductTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Koltuklar') {
            iconName = focused ? 'chair' : 'chair';
          } else if (route.name === 'Köşe Takımları') {
            iconName = focused ? 'chair' : 'chair';
          } else if (route.name === 'Berjerler') {
            iconName = focused ? 'chair' : 'chair';
          }

          // İkon bileşenini döndürür ve stilini uygular
          return <Icon name={iconName} size={size} color={color} style={{ width: 24, height: 24 }} />;
        },
        tabBarIconStyle: {
          width: 24,
          height: 24,
        },

        tabBarActiveTintColor: '#A18A80',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: [{
          display: 'flex',
        },
        null
      ]
      })}
      
    >
      <Tab.Screen name='Koltuklar' component={Sofa} />
      <Tab.Screen name='Köşe Takımları' component={CornerSeat} />
      <Tab.Screen name='Berjerler' component={Bergere} />
    </Tab.Navigator>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='SignUpScreen' component={SignUp} />
        <Stack.Screen name='Products' component={ProductTab} />
        <Stack.Screen name='MemberInfoScreen' component={MemberInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

