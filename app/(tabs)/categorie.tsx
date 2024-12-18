import {StyleSheet, Text, View} from "react-native";
import Grid from "@mui/material/Grid2";
import Card from "@/components/Card";

export default function categorieScreen(){
  return (
    <View style={styles.container}>
      <Grid container={true} spacing={4}>
        <Grid size={4}>
          <Text style={styles.text}>size=8</Text>
        </Grid>
        <Grid size={4}>
          <Text style={styles.text}>size=4</Text>
        </Grid>
        <Grid size={4}>
          <Text style={styles.text}>size=4</Text>
        </Grid>
        <Grid>
          <Card>

          </Card>
        </Grid>
      </Grid>
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
    alignSelf: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});