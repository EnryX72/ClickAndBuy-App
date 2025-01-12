import React from "react";
import {Text, View } from 'react-native';
import {Link} from 'expo-router';
import { useFonts } from 'expo-font';
import styles from "@/app/styles.js";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Montserrat:               require('@/assets/fonts/Montserrat-VariableFont_wght.ttf'),
    MontserratItalic:         require('@/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click&Buy</Text>
      <Text style={styles.subtitle}>Lo sport a portata di click</Text>
      <Link href="/(tabs)/carrello" style={styles.button}>
        Vai al Carrello
      </Link>
    </View>
  );
}