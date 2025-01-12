import { Text, View, Button} from "react-native";
import ProfilePreview from "@/components/ProfilePreview";
import styles from "@/app/styles.js"
import React from "react";

let nome = "Enrico", cognome = "Negretto", email = "cappeale@gmail.com";

function rename(newNome, newCognome) {
  nome = newNome;
  cognome = newCognome;
};

export default function profiloScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Il tuo profilo:</Text>
      <ProfilePreview nome={nome} cognome={cognome}></ProfilePreview>
      <Text style={styles.title}>Informazioni:</Text>
      <Text style={styles.header}>Email:</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  );
}