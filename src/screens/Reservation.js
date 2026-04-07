import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Reservation({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réservation d'une place</Text>
      <Button title="Retour au parking" onPress={() => navigation.navigate('Parking')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20 }
});
