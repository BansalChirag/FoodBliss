import React from 'react'
import {toast } from 'react-toastify';
import Navbar from '../components/NavBar'
import {useFormik} from 'formik';
import * as yup from 'yup';

const contactSchema = yup.object({
	name: yup.string().required("Please enter your name"),
	email:yup.string().email().required("Please enter your email"),
	messages: yup.array()
    .of(yup.string())
    .required('Please enter message')
})
  
const initialValues = {
	name: '',
	email: '',
	messages: [''],
  };
  

const Contact = () => {

	const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
		initialValues: initialValues,
		validationSchema: contactSchema,
		onSubmit: async (values)=>{
			try{
				const response = await fetch("http://localhost:5000/api/auth/users/contactUs",{
					method:'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values)
				})
				const data = await response.json();
				if(data.status===200){
					toast.success("Your response has been recorded.")
				}else{
					toast.error("An error occurred during form submission. Please try again later.");
				}
				console.log("🚀 ~ file: Contact.js:37 ~ onSubmit: ~ data:", data)
			}catch(err){
				toast.error("An error occurred during form submission. Please try again later.");
        	}
		}
	})

  return (
    <>
	<Navbar/>
    <div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src="../screens/images/img-01.png" alt="IMG"/>
			</div>

			<form className="contact1-form validate-form" method='post' onSubmit={handleSubmit}>
				<span className="contact1-form-title">
					Get in touch
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name" value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}/>
					<span className="shadow-input1"></span>
					{touched.name && errors.name && (
                        <p classNameName="error-className" style={{ color: 'red' }}>{errors.name}</p>
                      )}
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" type="text" name="email" placeholder="Email" value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}/>
					<span className="shadow-input1"></span>
					{touched.email && errors.email && (
                        <p classNameName="error-className" style={{ color: 'red' }}>{errors.email}</p>
                      )}
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="messages" placeholder="Message" value={values.messages}
					onChange={handleChange}
					onBlur={handleBlur}></textarea>
					<span className="shadow-input1"></span>
					{touched.messages && errors.messages && (
                        <p classNameName="error-className" style={{ color: 'red' }}>{errors.messages}</p>
                      )}
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn" >
						<span>
							Send Message
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>

    
    </>
  )
}

export default Contact