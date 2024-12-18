import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link href="/(tabs)/carrello" style={styles.button}>
        Vai al Carrello
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#e10000',
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#e10000',
  },
});
