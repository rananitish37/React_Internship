<<<<<<< HEAD

import { Box, Button, Modal, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate=useNavigate();
    const [open, setOpen]=useState(false);

    const submitHandler = () => {
        setOpen(true);
    };

    return (
    <>
        <div className="page">About page</div>
        <div
        style={{
            paddingLeft: 15,
            display: "flex",
            columnGap: 10,
        }}>
        <input type="text" name="UserName"/>
        <Button variant="contained" onClick={submitHandler}>Open model</Button>
        </div>
<Modal
  open={open}
  onClose={()=>{
    setOpen(false);
    console.log("modal closed");
  }}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={styled}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
    </>
    );
=======
import Navbaryarn from "./Components/Navbar";

export const About=()=>{
    return <div className="page">
    About page
    </div>
>>>>>>> 99ea84f678a7c9fed2e86a49094cb3755292a6c4
};