import { Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Cookies from 'js-cookie';
import WithAuth from '../layout/WithAuth';

const Homepage = () => {


  useEffect(() => {
  
    var a=Cookies.get('auth_email') // => 'value'
    console.log(a)


  }, [])

  return (
    
    <Typography style={{marginTop:"10vh"}} variant='h1'>Home page</Typography>
  )
}

export default WithAuth(Homepage);