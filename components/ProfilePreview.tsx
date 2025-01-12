import styles from "@/app/styles.js"
import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function profilePreview({nome, cognome}){
  return (
    <View style={thisStyles.accountItem}>
      <View style={thisStyles.avatar}>
        <Text style={styles.header}>{nome.charAt(0)}{cognome.charAt(0)}</Text>
      </View>
      <Text style={styles.text}>{nome} {cognome}</Text>
    </View>
  );
}

const thisStyles = StyleSheet.create({
  accountItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    backgroundColor: "#6200ea",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#fff",
    fontFamily: 'MontserratBold',
    fontSize: 20,
    fontWeight: "bold",
  },
  typography: {
    color: "#fff",
    fontFamily: 'MontserratRegular',
    fontSize: 16,
    marginTop: 8,
  },
});