import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import Homepage from './Components/Homepage';
import BookList from './Components/BookList';
import PageNotFound from './Components/PageNotFound';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const App = () => {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>

      <Navbar/>

      <Routes>  
        <Route path="/" element=<Login/>/>
        <Route path="/register" element=<Register/>/>
        <Route path="/home" element=<Homepage/>/>
        <Route path="*" element=<PageNotFound/>/>

        // <Route path="/booklist" element=<BookList/>/>
        // <Route path="/pagenotfound" element=<PageNotFound/>/>
      </Routes>
      

      <ToastContainer />
      </BrowserRouter>

      </ThemeProvider>
    
    
    
    </>
  ) 
}

export default App