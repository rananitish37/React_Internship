import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Logo</Typography>
          <Button variant="contained" sx={{ marginLeft: "auto" }} color="warning">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </NavLink>
          </Button>
          <Button variant="contained" color="warning" sx={{ marginLeft: "5px" }}>
            <NavLink to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              Register
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
