import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography } from "@mui/material";
import axios from 'axios';
import { toast } from "react-toastify";
import authService from "../services/authService";

export const Register = () => {

  const initialValues = {
    name: "",
    lname: "",
    email: "",
    roleid: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required").max(50),
    lname: Yup.string().required("Required").max(50),
    email: Yup.string().email("Invalid email").required("Required"),
    roleid: Yup.string().required("Required").max(600),
    password: Yup.string().required("Required"),
  });
  const handleSubmit=(values)=>{
    console.log(values);
    const payload={
      firstName:values.name,
      lastName:values.lname,
      email:values.email,
      roleId:values.roleid,
      password:values.password
    }
    authService.Register(payload).then((response)=>{
    if(response){
      toast.success('Success Registeration !', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    }
    ).catch((err)=>{
      toast.error('Something wrong...  ', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
    );
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography style={{marginTop:"10vh",textAlign:"center",}} variant='h3'> Register</Typography>
      <TextField
        id="name"
        name="name"
        label="First name"
        variant="outlined"
        fullWidth
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && (formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        style={{
          marginLeft: "25%",
          width: "50%",
          marginBottom: "20px",
        }}
      />
      <TextField
        id="lname"
        name="lname"
        label="last name"
        variant="outlined"
        fullWidth
        value={formik.values.lname}
        onChange={formik.handleChange}
        error={formik.touched.lname && (formik.errors.lname)}
        helperText={formik.touched.lname && formik.errors.lname}
        style={{
          marginLeft: "25%",
          width: "50%",
          marginBottom: "20px",
        }}
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && (formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        style={{
          marginLeft: "25%",
          width: "50%",
          marginBottom: "20px",
        }}
      />


      <TextField
        id="roleid"
        name="roleid"
        label="roleid"
        variant="outlined"
        fullWidth
        value={formik.values.roleid}
        onChange={formik.handleChange}
        error={formik.touched.roleid && (formik.errors.roleid)}
        helperText={formik.touched.roleid && formik.errors.roleid}
        style={{
          marginLeft: "25%",
          width: "50%",
          marginBottom: "20px",
        }}
      />
      <TextField
        id="password"
        name="password"
        label="password"
        variant="outlined"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && (formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        style={{
          marginLeft: "25%",
          width: "50%",
          marginBottom: "20px",
        }}
      />

      <br></br>
      <Button
        style={{
          marginLeft: "25%",
          width: "50%",
          marginBottom: "20px",
        }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default Register;