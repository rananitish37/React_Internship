import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import authService from "../services/authService";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("email should not be empty"),
    password: Yup.string().required("password should not be empty"),
  });

  const handleSubmit = (values) => {


    const payload={
      email:values.email,
      password:values.password
    }

    authService.Login(payload).then((response)=>
    
      {
        if(response){

          toast.success('Success Login !', {
            position: toast.POSITION.TOP_RIGHT
        });

        navigate("/home");
        Cookies.set("auth_email",values.email);
        }
      }
    
    ).catch((err)=>
    
    {
      toast.error(' Something wrong !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
    
    );

  // console.log(payload);


  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values, setFieldValue, errors,handleBlur }) => {
        console.log(errors);
        return (
          <Form>
            <div className="form-demo">
            <Typography style={{marginTop:"10vh",textAlign:"center",}} variant='h3'> Login</Typography>
              <TextField
                label="email"
                name="email"
                variant="outlined"
                fullWidth
                style={{
                  marginLeft: "25%",
                  width: "50%",
                  marginBottom: "20px",
                }}
                onBlur={handleBlur}
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              <FormHelperText
                error
                style={{
                  marginLeft: "25%",
                  width: "50%",
                  marginBottom: "20px",
                }}
              >
                <ErrorMessage name="email" />
              </FormHelperText>
              <TextField
                label="password"
                variant="outlined"
                fullWidth
                onBlur={handleBlur}
                style={{
                  marginLeft: "25%",
                  width: "50%",
                  marginBottom: "20px",
                }}
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
              />
              <FormHelperText
                error
                style={{
                  marginLeft: "25%",
                  width: "50%",
                  marginBottom: "20px",
                }}
              >
                <ErrorMessage name="password" />
              </FormHelperText>
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
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
