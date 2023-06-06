import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/context";

import { useFormik } from 'formik';
import * as yup from 'yup';
import './Profile.css';
import Swal from "sweetalert2";


const Schema = yup.object({
  oldPassword: yup.string().required("Please enter Password"),
  newPassword: yup.string().required("Please enter Password"),
  confirmNewPassword: yup.string().required("Please enter Password"),
})

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: ""
}


const Profile = () => {
  const { userDispatch } = useUser();
  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: initialValues,
    validationSchema: Schema,
    onSubmit:async(values) => {
      console.log(values);
      try{
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/auth/users/change-password",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(values)
        })
        const data = await response.json();
          if(data.message.includes("Invalid ")){
            // console.log("if")
            Swal.fire({
              icon: 'error',
              title: 'Failed.',
              text: "current password doesn't match",
            })
            // toast.error("current password doesn't match");
          }
          else if(data.message.includes("New passwords do")){
            // console.log("else if")
            // toast.error("New Passwords do not matched.");
            Swal.fire({
              icon: 'error',
              title: 'Failed.',
              text: 'New Passwords do not matched.',
            })
          }else{
            Swal.fire({
              icon: 'Success',
              title: 'Success.',
              text: 'Password Changed Successfully.',
            })
            // toast.success("Password Changed Successfully.");
          }
        
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please Try again later.',
        })
      }
      }
  })

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!',
    }).then(result => {
      if (result.isConfirmed) {
        userDispatch({ type: 'USER', payload: false });

    // Remove items from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');
    // toast.success("Logout Successfully.");
    setTimeout(() => {
      navigate(-1);
    }, 2000);
      }
    });
    
  };

  return (
    <section className="profile-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 gradient-custom text-center text-white">
            <div className="avatar">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-5" style={{ width: "190px", borderRadius: "50%" }} />
            </div>
            {/*<button className="btn btn-light change-picture-button my-3">
              Change Picture
  </button>*/}
            <h5>{localStorage.getItem('username')}</h5>
          </div>
          <div className="col-md-8">
            <div className="card-body p-4">
              <h6>Information</h6>
              <hr className="mt-0 mb-4" />
              <div className="row pt-1">
                <div className="col-6 mb-3">
                  <h6>Email</h6>
                  <p className="text-muted">{localStorage.getItem('userEmail')}</p>
                </div>
              </div>
              <div className="change-password-section mt-4">
                <h6>Change Password</h6>
                <hr className="mt-0 mb-4" />
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      id="name"
                      name="oldPassword"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Current Password"
                      value={values.oldPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.oldPassword && errors.oldPassword && (
                      <p classNameName="error-className" style={{ color: 'red' }}>{errors.oldPassword}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      id="name"
                      name="newPassword"
                      className="form-control form-control-lg"
                      placeholder="Enter New Password"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.newPassword && errors.newPassword && (
                      <p classNameName="error-className" style={{ color: 'red' }}>{errors.newPassword}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmNewPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="name"
                      name="confirmNewPassword"
                      className="form-control form-control-lg"
                      placeholder="Confirm New Password"
                      value={values.confirmNewPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.confirmNewPassword && errors.confirmNewPassword && (
                      <p classNameName="error-className" style={{ color: 'red' }}>{errors.confirmNewPassword}</p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary btn-sm mt-3 change-password-button"  disabled={isSubmitting}>
                      {isSubmitting ? 
                        'Updating'
                        :
                        'Change Password' 
                      }
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary  logout-button mt-3" onClick={handleLogout}>
                Logout
              </button>
              <Link to="/" className="btn btn-light mt-3" style={{ marginLeft: "10px" }} onClick={navigate(-1)}>
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
