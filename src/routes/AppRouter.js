import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormTour from "../components/FormTour";
import AppBar from "../components/AppBar";
import App from "../App";


const AppRouter = () => {
  return (
    <BrowserRouter>
      
        <AppBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<FormTour />} />
        </Routes>
     
    </BrowserRouter>
  );
};

export default AppRouter;
