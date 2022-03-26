import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import { url } from "../helpers/url";
const FormTour = () => {

  const [dataForm, setDataForm] = useState({
    name: '',
    duration:'',
    rating:'',
    numberOfReviews:'',
    price:'',
    image:''
  })

  const {name, duration, rating, numberOfReviews, price, image}=dataForm

  const handleChange = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: [target.value],
    });

    console.log(target.value);
    console.log(target);
    console.log(dataForm);
  };

  // const handleChanged = ({ target }) => {
    
  //   setDataForm(
  //     // ...dataForm,[target.name]:[target.value]
  //     target.value
  //   )
  //   console.log(target.value);
  // };

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('Hola')
    postData()
  }
  
  const postData= ()=>{
    axios
    .post(url ,dataForm )
    .then(resp=>{
      console.log(resp)
    .catch(error=>console.log(error))
    })
  }

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          helperText="Please enter your destiny"
          id="demo-helper-text-aligned"
          label="Destiny"
          value={name}
          onChange={handleChange}
        />
        <TextField
          helperText="Duration Tour "
          id="demo-helper-text-aligned"
          label="Duration"
          value= {duration}
          onChange={handleChange}
        />
        <TextField
          helperText="Please rate the tour"
          id="demo-helper-text-aligned"
          label="Rating"
          value={rating}
          onChange={handleChange}
        />
        <TextField
          helperText="Reviews"
          id="demo-helper-text-aligned"
          label="Reviews"
          value={numberOfReviews}
          onChange={handleChange}
        />
        <TextField
          helperText="Set the price of your tour"
          id="demo-helper-text-aligned"
          label="Price"
          value={price}
          onChange={handleChange}
        />
        <TextField
          helperText="Please enter an image"
          id="demo-helper-text-aligned"
          label="Image"
          value={image}
          onChange={handleChange}
        />
        <Button variant="contained" type="Submit" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </div>
  );
};

export default FormTour;
