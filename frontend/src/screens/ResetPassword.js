import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../components/assets/loading.svg";
import Swal from "sweetalert2";


const Schema = yup.object({
  newPassword: yup.string().required("Please enter Password"),
  confirmNewPassword: yup.string().required("Please enter Password"),
});

const initialValues = {
  newPassword: "",
  confirmNewPassword: "",
};
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
  margin-bottom: 20px;
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

const ResetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Schema,
      onSubmit: async (values) => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/auth/users/forget-password/${id}/${token}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );
          const data = await response.json();
          if (data.success) {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              Swal.fire(
                'Success!',
                'Password Changed Successfully.',
                'success'
              )
            }, 2000);
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          } else {
            if (response.status === 400 && data.message.includes("Link")) {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                Swal.fire({
                  icon: 'error',
                  title: 'Failed',
                  text: 'The Link has expired.',
                })
              }, 2000);
            } else if (
              response.status === 400 &&
              data.message.includes("Passwords")
            ) {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                Swal.fire({
                  icon: 'error',
                  title: 'Failed.',
                  text: 'Passwords do not match',
                })
              }, 2000);
            }
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
    <FormContainer>
      <Title>Change Password </Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <InputContainer>
            <Input
              type={showPassword1 ? "text" : "password"}
              id="email"
              name="newPassword"
              className="form-control form-control-lg"
              placeholder="Password"
              value={values.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.newPassword && errors.newPassword && (
              <ErrorText>{errors.newPassword}</ErrorText>
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
              id="password"
              name="confirmNewPassword"
              className="form-control form-control-lg"
              placeholder="Confirm Password"
              value={values.confirmNewPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.confirmNewPassword && errors.confirmNewPassword && (
              <ErrorText>{errors.confirmNewPassword}</ErrorText>
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
          {isLoading ? (
            <LoadingIcon
              className="loading-icon"
              style={{ color: "#fff", height: "100%" }}
            />
          ) : (
            "change password"
          )}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ResetPassword;
