import React, { useState } from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {useFormik} from 'formik';
import * as yup from 'yup';
import './forgotPassword.css'
import Navbar from '../components/NavBar';
import PaddingTop from '../components/PaddingTop';
import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../components/assets/loading.svg';
import Swal from 'sweetalert2';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 80px auto 40px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    /* Styles for screens smaller than or equal to 768px */
    max-width: 320px;
    margin: 40px auto;
    padding: 16px;
  }
`;

const LoginLink = styled(Link)`
  color: #FC8019;
  cursor: pointer;
  font-weight: 500;
  font-size:15px
`

const Title = styled.h2`
  color:#3D4152;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
width: 100%;
height: 50px;
text-transform: uppercase;
font-size: 1.5rem;
color: white;
background: #FC8019 !important;
outline: none;
border: none;
font-weight: 600;
cursor: pointer;
box-shadow: 0 2px 5px #0000001f;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
@media (max-width: 768px) {
  /* Styles for screens smaller than or equal to 768px */
  font-size: 16px;
}
`;

const Input = styled.input`
  background: #fff;
  border: 1px solid #d3d3d3;
  font-size: 1.8rem;
  height: 54px;
  outline: none;
  padding: 0 20px;
  width: 100%;
`;

const Heading = styled.p`
  font-size:15px
`
const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
`;


const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Schema = yup.object({
    email:yup.string().email().required("Please enter your email"),
  })
  
    const initialValues = {
      email:""
    }
    const {values,errors,touched,handleSubmit,handleBlur,handleChange} = 
    useFormik({
      initialValues:initialValues,
      validationSchema:Schema,
      onSubmit : async(values)=>{
        try{
          const response = await fetch("http://localhost:5000/api/auth/users/forget-password",{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
          const data = await response.json();
          if(data.success===false && response.status===500){
            setIsLoading(true);
            setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong! Please Try again later.',
            })
          }, 2000);
          }
          else if(data.message.includes("Invalid Email")){
            setIsLoading(true);
            setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong! Please Try again later.',
            })
          }, 2000);
          }
          else if(response.status===200){
            setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire(
              'Success!',
              'A Link has been sent on your registered email address.',
              'success'
            )
            // toast.success('A Link has been sent on your registered email address.')
          }, 2000);
          }
        }catch(err){
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong! Please Try again later.',
            })
          }, 2000);
        }
      }
    })
  return (
    <>
    <Navbar/>
    <PaddingTop/>
    <FormContainer>
    <Title>Forgot Password?</Title>
    <Heading>Please enter your email address to receive a reset password link</Heading>
    <form onSubmit={handleSubmit} method="post">
    <Input
    type="email"
    id=""
    placeholder="Email"
    className="form-control form-control-lg"
    name="email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
  />
  {touched.email && errors.email && (
    <ErrorText>
      {errors.email}
    </ErrorText>
  )}
  <SubmitButton type="submit" disabled={isLoading}>
  {isLoading ? (
    <LoadingIcon className="loading-icon" style={{ color: '#fff', height: '100%' }} />
  ) : (
    'Send Link'
  )}
</SubmitButton>
  
      
    </form>
    <LoginLink to="/login">Go back to Login</LoginLink>
  </FormContainer>
                  
    </>
  )
}

export default ForgotPassword