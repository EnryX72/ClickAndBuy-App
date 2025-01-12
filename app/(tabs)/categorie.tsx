import {Text, View, StyleSheet, ScrollView} from "react-native";
import styles from "@/app/styles.js"
import React from "react";
import Card from "@/components/Card";

export default function categorieScreen(){
  return (
    <>
      <View style={pageStyles.sfondoTesto}>
        <Text style={styles.title}>Categorie</Text>
      </View>
      <ScrollView style={pageStyles.scrollContainer}>
        <View style={pageStyles.container}>
          <View style={pageStyles.column}>
            <Card text={"Calcio"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/calcio.jpg" }} />
            <Card text={"Pallavolo"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/volley.jpg" }} />
            <Card text={"Ciclismo"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/handsome-young-man-cycling-on-the-road-2022-12-15-18-18-17-utc-1.jpg" }} />
            <Card text={"Fitness"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/fitness.jpg" }} />
            <Card text={"Sport invernali"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/sci.jpg" }} />
            <Card text={"Motorsport"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/moto.jpg" }} />
          </View>
          <View style={pageStyles.column}>
            <Card text={"Basket"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/basket.jpg" }} />
            <Card text={"Tennis"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/tennis.jpg" }} />
            <Card text={"Running"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/running.jpg" }} />
            <Card text={"Nuoto"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/fit-swimmer-training-in-the-swimming-pool-2022-02-02-05-05-55-utc-3.jpg" }} />
            <Card text={"Trekking"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/trekking.jpg" }} />
            <Card text={"Yoga"} imageSource={{ uri: "https://clicknbuy.altervista.org/wp-content/uploads/2024/11/yoga.jpg" }} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const pageStyles = StyleSheet.create({
  sfondoTesto: {
    backgroundColor: '#25292e',
    paddingTop: 4,
    paddingLeft: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',  //spazio tra le colonne
    paddingHorizontal: 8,            //margine ai bordi della pagina
    backgroundColor: '#25292e',
    paddingVertical: 8,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,              //spazio tra le colonne
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});