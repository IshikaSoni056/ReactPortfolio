import React from 'react';
import Home from './Home';
import Contact from './Contact';

import About from './About';
import Projects from './Projects'
import {HashRouter, Routes, Route} from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import {ThemeProvider} from "styled-components";





const App = () => {

  const theme = {
    colors: {
      bgblack900:"#151515",
    bgblack100: "#222222",
    grey:"#272525",
    white: "#ffffff",
    offwhite:"#e9e9e9",
    yellow:"rgb(222, 222, 84)",
    },
    media : {mobile: "768px" , tab: "998px"},
  };

  return (
    <ThemeProvider theme = {theme}>
   <HashRouter>
    
   <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/about" element = {<About/>} />
    <Route path = "/contact" element = {<Contact/>} />
    <Route path = "/projects" element = {<Projects/>} />
    </Routes>
  
    </HashRouter>
    </ThemeProvider>
  )
}

export default App;
