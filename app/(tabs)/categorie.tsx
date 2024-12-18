import {StyleSheet, Text, View} from "react-native";
import Grid from "@mui/material/Grid2";
import Card from "@/components/Card";

export default function categorieScreen(){
  return (
    <View style={styles.container}>
      <Grid container={true} spacing={4} style={{alignItems: 'center'}}>
        <Grid>
          <Card
            imgLink={'https://clicknbuy.altervista.org/wp-content/uploads/2024/12/output-onlinepngtools-1.png'}
            title={'1'} description={'aaa'} buttonName={'A'} buttonAction={undefined}>
          </Card>
        </Grid>
        <Grid>
          <Card
            imgLink={'https://clicknbuy.altervista.org/wp-content/uploads/2024/12/output-onlinepngtools-1.png'}
            title={'2'} description={'bbb'} buttonName={'B'} buttonAction={undefined}>
          </Card>
        </Grid>
        <Grid>
          <Card
            imgLink={'https://clicknbuy.altervista.org/wp-content/uploads/2024/12/output-onlinepngtools-1.png'}
            title={'3'} description={'ccc'} buttonName={'C'} buttonAction={undefined}>
          </Card>
        </Grid>
        <Grid>
          <Card
            imgLink={'https://clicknbuy.altervista.org/wp-content/uploads/2024/12/output-onlinepngtools-1.png'}
            title={'4'} description={'ddd'} buttonName={'D'} buttonAction={undefined}>
          </Card>
        </Grid>
        <Grid>
          <Card
            imgLink={'https://clicknbuy.altervista.org/wp-content/uploads/2024/12/output-onlinepngtools-1.png'}
            title={'5'} description={'fff'} buttonName={'F'} buttonAction={undefined}>
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