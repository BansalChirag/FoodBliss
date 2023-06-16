import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Navbar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../../components/assets/loading.svg';
import PaddingTop from '../../components/paddingTop/PaddingTop';
import Swal from 'sweetalert2';

const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 25px auto 40px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    /* Styles for screens smaller than or equal to 768px */
    max-width: 320px;
    margin: 40px auto;
    padding: 16px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color:#3D4152
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
border: 1px solid #d3d3d3
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

const ErrorContainer = styled.div`
  margin-top: 5px;
`;


const ErrorText = styled.p`
  color: red;
  font-size: 14px; /* Adjust the font size as needed */
  margin: 5px 0; /* Adjust the margin as needed */
`;

const LoginLink = styled(Link)`
  color: #FC8019;
  cursor: pointer;
  font-weight: 500;
`
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
const CreateAccount = styled.div`
  margin-bottom:10px;
  font-size:15px
`;

const OrText = styled.span`
  margin-right: 5px;
`;

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
const Line = styled.div`
background: #000;
border-radius: 50px;
height: 2px;
width: 30px;
margin-bottom: 3rem;
`


const signupSchema = yup.object({

  name: yup.string().min(2).max(25).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter Password"),
  confirm_password: yup.string().required("Please enter Password"),
  mob: yup.number().typeError("Mobile Number should be a valid mobile number.").test('len', 'Mobile Number should of 10 digits', (val) => val.toString().length === 10).required("Please enter Mobile Number"),

  // yup.string().test('len', 'Must be exactly 5 characters', val => val.length === 5)
})

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  mob: ""
}

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })
        const data = await response.json();
        if (data.message.includes("Passwords do ")) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              icon: 'error',
              title: 'Failed.',
              text: "Passwords do not match.",
            }
          )
            // toast.error("Passwords do not match.")
          }, 2000)
        }
        else if (data.message.includes("User with email")) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              icon: 'error',
              title: 'Failed.',
              text: `User with email ${values.email} already exists.`,
            }
          )
            // toast.error(`User with email ${values.email} already exists.`)
          }, 2000)
        }
        else if (data.success === true) {
          localStorage.setItem('mob', data.mob)
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              title: 'Success!',
							text: 'Account created successfully',
							icon: 'success',
							// showCancelButton: true,
							// confirmButtonColor: '#3085d6',
							// cancelButtonColor: '#d33',
							// confirmButtonText: 'Yes, Login!',
            })
            // toast.success("Registered Successfully.")
          }, 2000)
          setTimeout(() => {
            navigate('/login');
          }, 3000)
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
    }
  })


  return (
    <>
    <Navbar />
    <PaddingTop />
      <SignUpContainer>
        <Title>Sign up</Title>
        <CreateAccount>
          <OrText>or</OrText>
          <LoginLink to="/login">login to your account</LoginLink>
        </CreateAccount>
        <Line class="style"></Line>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              id="name"
              name="name"
              className="form-control form-control-lg"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <ErrorContainer>
                <ErrorText>{errors.name}</ErrorText>
              </ErrorContainer>
            )}
          </FormGroup>

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
            {touched.email && errors.email && (
              <ErrorContainer>
                <ErrorText>{errors.email}</ErrorText>
              </ErrorContainer>
            )}
          </FormGroup>

          <FormGroup>

            <Input
              type="text"
              id="mob"
              name="mob"
              className="form-control form-control-lg"
              placeholder="Mobile"
              value={values.mob}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.mob && errors.mob && (
              <ErrorContainer>
                <ErrorText>{errors.mob}</ErrorText>
              </ErrorContainer>
            )}
          </FormGroup>
          <FormGroup>
            <InputContainer>
              <Input
                type={showPassword1 ? "text" : "password"}
                id="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <ErrorContainer>
                  <ErrorText>{errors.password}</ErrorText>
                </ErrorContainer>
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
                onClick={() => setShowPassword1(!showPassword1)}
              >
                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
              </EyeIcon>
            </InputContainer>
          </FormGroup>

          <FormGroup>
            <InputContainer>
              <Input
                type={showPassword2 ? "text" : "password"}
                id="confirm_password"
                name="confirm_password"
                className="form-control form-control-lg"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirm_password && errors.confirm_password && (
                <ErrorContainer>
                  <ErrorText>{errors.confirm_password}</ErrorText>
                </ErrorContainer>
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
                onClick={() => setShowPassword2(!showPassword2)}
              >
                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
              </EyeIcon>
            </InputContainer>
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {/*isLoading ? 'Submitting...' : 'Sign Up'*/}
            {
              isLoading ? <LoadingIcon className="loading-icon" style={{color:'#fff',height: '100%'}}/>
               : "Sign Up"
            }
          </SubmitButton>
        </form>

      </SignUpContainer>
    </>
  );
};

export default SignUp;