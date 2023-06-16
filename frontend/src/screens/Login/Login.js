import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useUser } from '../../context/context';
import Navbar from '../../components/NavBar/NavBar';
import { ReactComponent as LoadingIcon } from '../../components/assets/loading.svg';
import PaddingTop from '../../components/paddingTop/PaddingTop';
import Swal from 'sweetalert2';
// import { apiUrl } from '../config';


// console.log(apiUrl)




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

const Title = styled.h2`
  color: #3d4152;
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 768px) {
    /* Styles for screens smaller than or equal to 768px */
    font-size: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  background: #fff;
  border: 1px solid #d3d3d3;
  font-size: 1.8rem;
  height: 54px;
  outline: none;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    /* Styles for screens smaller than or equal to 768px */
    font-size: 16px;
    height: 50px;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: white;
  background: #fc8019 !important;
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

const ForgotPasswordLink = styled(Link)`
  text-align: right;
  display: block;
  margin-top: 10px;
  color: #fc8019;
  font-size: 15px;
`;

const SignupLink = styled(Link)`
  color: #fc8019;
  cursor: pointer;
  font-weight: 500;
`;

const Line = styled.div`
background: #000;
border-radius: 50px;
height: 2px;
width: 30px;
margin-bottom: 3rem;
`
const EyeIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  height: 24px;
  width: 24px;
  fill: #aaa;
  transition: fill 0.3s ease;

  &:hover {
    fill: #333;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const CreateAccount = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;

const OrText = styled.span`
  margin-right: 5px;
`;

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { userDispatch } = useUser();
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const response = await fetch( `${process.env.REACT_APP_API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log("🚀 ~ file: Login.js:172 ~ onSubmit: ~ data:", data)
        if (data.success === false || data.message.includes('Invalid')) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Failed.',
                text: 'Invalid Credentials!',
              }
            )
            // toast.error('Invalid Credentials.');
          }, 2000);
        }
        // else if(data.success === false ){
        //   setIsLoading(true);
        //   setTimeout(() => {
        //     setIsLoading(false);
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'Oops...',
        //       text: 'Something went wrong! Please Try again later.',
        //     })
        //   }, 2000);
        // }
        else {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            // toast.success('Logged in successfully');
            Swal.fire(
              'Success!',
              'Login Successfully!',
              'success'
            )
          }, 2000);
          setTimeout(() => {
            userDispatch({ type: 'USER', payload: true });
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.name);
          localStorage.setItem('userEmail', data.email);
            navigate('/');
          }, 3000);
        }
      } catch (err) {
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
    },
  });
  return (
    <>
      <Navbar />
      <PaddingTop />
      <FormContainer>
        <Title>Login</Title>
        <CreateAccount>
          <OrText>or</OrText>
          <SignupLink to="/signup">create an account</SignupLink>
        </CreateAccount>
        <Line className="style"></Line>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              id="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <InputContainer>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}

              <EyeIcon
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="eye"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowPassword(!showPassword)}
              >
                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
              </EyeIcon>
            </InputContainer>
            <ForgotPasswordLink to="/forgot-password">Forgot Password?</ForgotPasswordLink>
          </FormGroup>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <LoadingIcon className="loading-icon" style={{ color: '#fff', height: '100%' }} />
              // 'Logging In.....'
            ) : (
              'Login'
            )}
          </SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Login;
