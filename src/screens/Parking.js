import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Parking({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking SmartParkingZoris</Text>
      <Image source={require('../../assets/logo/logo.txt')} style={{width:100,height:100}} />
      <Button title="Réserver une place" onPress={() => navigation.navigate('Reservation')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20 }
});
