import "./App.css";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contacts from "./Components/Contacts";


function App() {
  

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Education/>
        <Projects/>
        <Achievements/>
        <Contacts/>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
