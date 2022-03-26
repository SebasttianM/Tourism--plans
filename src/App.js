import "./App.css";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import axios from "axios";
import {url} from './helpers/url'
import { useEffect, useState } from "react";

function App() {

  const [tour, setTour] = useState([])

  const getData= ()=>{
    axios
    .get(url)
    .then(resp =>{
      console.log(resp.data)
      setTour(resp.data)
    })
    .catch(error=> {
      console.log(error)
    })
  }

 

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="App">
      
      <Container sx={{marginY:4}}>
        <Grid container spacing={5}>
          <TourCard tour={tour} getData={getData}/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
