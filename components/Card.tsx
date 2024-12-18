import {Card, Typography} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {StyleSheet} from "react-native";
import {createTheme} from "@mui/system";

export default function card({imgLink, title, description, buttonName, buttonAction}){
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgLink}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {buttonAction}}>
          {buttonName}
        </Button>
      </CardActions>
    </Card>
  );
}

const styles = StyleSheet.create({

});

const theme = createTheme({
  palette: {
    background: {
      paper: '#EFF7FF',
    },
  },
});