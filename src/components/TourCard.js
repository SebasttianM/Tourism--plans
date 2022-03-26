import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {AccessTime} from "@mui/icons-material"
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material"

const theme= createTheme({
  components:{
    MuiTypography: {
      variants: [
        {
          props:{
            variant:"body2"
          },
          style:{
            fontSize:8, 
          }
        }
      ]
    }

  }
})


const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://st2.depositphotos.com/1157740/5770/i/600/depositphotos_57706799-stock-photo-waterfall-beautiful-erawan-waterfall.jpg"
          alt=""
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Horseshoe Falls
          </Typography>
        </Box>
        <Box sx={{display:"flex", alignItems:"center"}}>
          <AccessTime sx={{ width:10}}/>
            <Typography variant="body2" component="p" marginLeft={2}>
                5 hours
            </Typography>
        </Box>
        <Box sx={{ display:"flex", alignItems:"center" }} marginTop={3}>

          <Rating name="read-only" value={4.5} size="small" precision={0.5} readOnly /> 
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          <Typography variant="body2" component="p" marginLeft={1.5}>
            60 reviews
          </Typography>
        </Box>
        <Box>
        <Typography variant="h6" component="h4" marginTop={0}>
            From $450.000 Pesos
          </Typography>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
