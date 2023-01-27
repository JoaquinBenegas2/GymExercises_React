import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/normalize.css"
import "./App.css";

import ScrollToTop from "./utils/ScrollToTop"
import Footer from "./components/Footer";

import Home from "./views/Home";
import ExerciseDetail from "./views/ExerciseDetail";


const App = () => {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App