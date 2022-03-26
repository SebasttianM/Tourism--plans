import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { url } from "../helpers/url";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 8,
          },
        },
      ],
    },
  },
});



const TourCard = ({ tour, getData}) => {
  
  const deleteData= (id)=>{
    axios
    .delete(url+id)
    .then(resp=>{
      console.log(resp)
      getData()
    })
  }
  return (
    <>
      {tour.map(
        ({
          id,
          name,
          title,
          duration,
          rating,
          numberOfReviews,
          price,
          image,
        }) => (
          <Grid item xs={3} key={id}>
            <ThemeProvider theme={theme}>
              <Paper elevation={3}>
                <img className="img" src={image} alt="" />
                <Box paddingX={1}>
                  <Typography variant="subtitle1" component="h2">
                    {name}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTime sx={{ width: 10 }} />
                  <Typography variant="body2" component="p" marginLeft={2}>
                    {duration}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  marginTop={3}
                >
                  <Rating
                    name="read-only"
                    value={rating}
                    size="small"
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    4.5
                  </Typography>
                  <Typography variant="body2" component="p" marginLeft={1.5}>
                    Reviews {numberOfReviews}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" component="h4" marginTop={0}>
                    From $ {price}
                  </Typography>
                </Box>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>deleteData(id)}>
                  Delete
                </Button>
              </Paper>
            </ThemeProvider>
          </Grid>
        )
      )}
    </>
  );
};

export default TourCard;
