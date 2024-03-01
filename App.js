import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapExample from './src/example/MapExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Titan Explorer is coming soon!</Text>
      <StatusBar style="auto" /> 
      <MapExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
