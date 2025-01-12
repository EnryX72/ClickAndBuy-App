import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function Card({ text, imageSource /*, onPress*/ }) {
  return (
    <TouchableOpacity style={pageStyles.card} /* onPress={onPress} */>
      <Image source={imageSource} style={pageStyles.image} />
      <View style={pageStyles.overlay}>
        <Text style={pageStyles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const pageStyles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12, // angoli smussati
    overflow: 'hidden', // per fare in modo che l'immagine non esca fuori dagli angoli smussati
    marginBottom: 16, // spazio tra le card
    elevation: 3, // ombra per Android
    shadowColor: '#000', // ombra per iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150, // altezza dell'immagine
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center', // centra orizzontalmente
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // sfondo scuro trasparente sopra l'immagine
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
});
