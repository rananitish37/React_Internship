<<<<<<< HEAD
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
  
=======
import './App.css';
import { Route,Routes,BrowserRouter, Link} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {NotFound} from './NotFound';
import {Books} from './Books';
import Navbar from './Components/Navbar';
import Signin from './Signin';
import SignUp from './SignUp';
>>>>>>> 99ea84f678a7c9fed2e86a49094cb3755292a6c4

  return (
<<<<<<< HEAD
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
=======
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
        
    </Routes>
    </BrowserRouter>
  );
>>>>>>> 99ea84f678a7c9fed2e86a49094cb3755292a6c4
}

export default App