import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Parking from '../screens/Parking';
import Reservation from '../screens/Reservation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Parking">
        <Stack.Screen name="Parking" component={Parking} />
        <Stack.Screen name="Reservation" component={Reservation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
