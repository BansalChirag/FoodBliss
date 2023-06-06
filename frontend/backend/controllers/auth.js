const express = require('express');
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Order = require('../models/orderSchema');
require('dotenv').config();
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.appKey,
        pass: process.env.appPassword
    }
});


exports.userRegistration = async(req,res)=>{
    const{name,email,mob,password,confirm_password} = req.body;
    try{
        if(name && email && mob && password && confirm_password){
            const isUser = await User.findOne({email})
            if(isUser){
                res.json({ success: false, message: `User with email ${email} already exists.`});
                return;   
            }
            else if(password!==confirm_password){
                res.json({success: false,message:"Passwords do not match"});  
                return;   
            }
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new User({
                name,
                email,
                phoneNumber:mob,
                password:hashedPassword,
            })
            newUser.save();
            res.json({success: true,message:"User Registered Successfully",mob:mob});
        }else{
            res.json({success: false,message:"All Fields are required"});
          }
    }catch(err){
        console.log("err in signup : " + err);
        res.json({success: false,message:"Registeration Failed."});
    }
}

exports.login = async(req,res)=>{
    const{email,password} = req.body;
    
    try{
        if(email && password){
            const isUser = await User.findOne({email})
            // console.log(isUser);
            const isMatched = await bcrypt.compare(password,isUser.password);
            if(isUser && isMatched){
                const token = jwt.sign({userId : isUser._id},
                    "hellooooooooooooooooooooooooooooooo",
                    {
                        expiresIn: "2d",
                    }
                )
                return res.status(200).json({
                    success: true,
                    message: "Login Successfully",
                    token,
                    name:isUser.name,
                    email
                });
            }else{
                return res.status(400).json({ success: false,message: "Invalid Credentials." });
            }
        }else{
            res.json({success: false,message:"All Fields are required"});
        }
    }catch(err){
        console.log("err in login : " + err);
        res.json({success: false,message:"Login Failed."});
    }
}


exports.forgot_password = async(req,res)=>{
    const {email} = req.body;
    try{
        if(email){
            // console.log(email);
            const isUser = await User.findOne({email});
            if(isUser){
                // console.log(isUser)
                const secretKey = isUser._id + "heeeeeeeeeeeeeeeeeeeeeeeeeeeelo";
                // console.log(isUser._id)
                const token = jwt.sign({
                    userId: isUser._id
                },secretKey,{expiresIn:"5m"})
                const link = `http://localhost:3000/user/passwordReset/${isUser._id}/${token}`;
                const mailOptions = {
                    from: 'bansalcb2021@gmail.com',
                    to: email,
                    subject: 'Password Reset Request',
                    html:`<!doctype html>
                    <html lang="en-US">
                    
                    <head>
                        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                        <title>Reset Password Email Template</title>
                        <meta name="description" content="Reset Password Email Template.">
                        <style type="text/css">
                            a:hover {text-decoration: underline !important;}
                        </style>
                    </head>
                    
                    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                        <!--100% body table-->
                        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                            <tr>
                                <td>
                                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                                        align="center" cellpadding="0" cellspacing="0">
                                       
                                        <tr>
                                            <td>
                                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                                    <tr>
                                                        <td style="height:40px;">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:0 35px;">
                                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                                requested to reset your password</h1>
                                                            <span
                                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                                Click below Button to reset your Password..
                                                            </p>
                                                            <a href="${link}"
                                                                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset Password</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="height:40px;">&nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                       
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <!--/100% body table-->
                    </body>
                    
                    </html>`
                };

                transport.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error("Error occurred while sending email:", error);
                        return res.status(500).json({ message: "Error occurred while sending email" });
                    }
                    return res.status(200).json({ message: "Email Sent",link:link});
                });

            }else{
                return res.status(404).json({ message: "Invalid Email" });
            }
        }else {
            return res.status(400).json({ message: "Email is required" });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Forgot password failed." });
    }
}

exports.forgotpasswordEmail = async(req,res)=>{
    const {newPassword,confirmNewPassword} = req.body;
    const{id,token} = req.params;
    try{
        if (newPassword && confirmNewPassword && id && token) {
            if(newPassword===confirmNewPassword){
                const isUser = await User.findById(id);
                // console.log("isUser : " + isUser)
                // console.log(isUser._id)
                const secretKey = isUser._id + "heeeeeeeeeeeeeeeeeeeeeeeeeeeelo";
                const isValid = jwt.verify(token,secretKey); 
                if(isValid){
                    // res.send(`${newPassword} ${confirmNewPassword} ${id} ${token}`);
                    const hashedPassword = await bcrypt.hash(newPassword, 10);
                    const isUpdated = await User.findByIdAndUpdate(isUser._id,{
                        $set:{
                            password:hashedPassword
                        }
                    })
                    if(isUpdated){
                        return res.status(200).json({
                            success:true,
                            message: "Password Changed Successfully",
                        });
                    }
                    else {
                        return res.status(500).json({ success: false, message: "Error occurred while updating password." });
                    }
                }else{
                    return res.status(404).json({
                        success: false,
                        message: "Link has been Expired",
                    });
                }
            }
            else{
                return res
            .status(400)
            .json({ success:false,message: "Passwords do not match" });
            }
            
        }else{
            return res.status(400).json({success:false,message: "All fields are required" });
        }
    }catch(err){
        return res.status(500).json({success: false,message:"forgot password(token) failed."});
    }
}

exports.changeOldPassword = async (req, res) => {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
  
    try {
      if (oldPassword && newPassword && confirmNewPassword) {
          const user = await User.findById(req.user._id);
        // Retrieve the user from the database
        // console.log(req.user_id);
        // // Compare the oldPassword with the stored hashed password
        const isOldPasswordCorrect = await bcrypt.compare(
          oldPassword,
          user.password
        );
  
        if (isOldPasswordCorrect) {
          if (newPassword === confirmNewPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await User.findByIdAndUpdate(req.user._id, {
              $set: {
                password: hashedPassword,
              },
            });
            return res
              .status(200)
              .json({ message: "Password changed successfully." });
          } else {
            return res
              .status(400)
              .json({ message: "New passwords do not match." });
          }
        } else {
          return res.status(400).json({ message: "Invalid old password." });
        }
      } else {
        return res
          .status(400)
          .json({ message: "Please fill all the required fields." });
      }
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, message: "Change password failed." });
    }
  };
  


exports.cartData = async (req, res) => {
    const data = req.body.order_data;
    data.unshift({ Order_date: req.body.order_date });
    try {
      const existingOrder = await Order.findOne({ email: req.body.email });
      if (!existingOrder) {
        await Order.create({
          email: req.body.email,
          order_data: [data]
        });
  
        res.status(200).json({ success: true });
      } else {
        await Order.findOneAndUpdate(
          { email: req.body.email },
          { $push: { order_data: data } }
        );
        res.status(200).json({ success: true });
      }
    } catch (error) {
      console.log("error.message : " + error.message);
      res.status(500).send("Server Error: " + error.message);
    }
  };
  

exports.myOrdersData = async(req,res)=>{
    try{
        const eId = await Order.findOne({ 'email': req.body.email })
      //console.log(eId)
      res.json({orderData:eId})
    }
    catch (error) {
        res.send("Error",error.message)
    }
}

  // Calculate total price and total items
//   let totalPrice = 0;
//   let totalItems = 0;

//   data.forEach(order => {
//     order.forEach(item => {
//       totalPrice += item.price;
//       totalItems += item.qty;
//     });
//   });

//   const mailOptions = {
//     from: 'your-email@example.com',
//     to: req.body.email,
//     subject: 'Order Confirmation',
//     html: `
//       <h1>Order Details</h1>
//       <p>Total Items: ${totalItems}</p>
//       <p>Total Price: ₹${totalPrice}</p>
//       <h2>Ordered Items:</h2>
//       <ul>
//         ${data
//           .map(order =>
//             order
//               .map(
//                 item => `<li>${item.name} - ₹${item.price} x ${item.qty}</li>`
//               )
//               .join('')
//           )
//           .join('')}
//       </ul>
//       <p>Thank you for your order!</p>
//     `
//   };

//   transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//       return res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });


exports.sendEmail = async (req, res) => {
    const data = req.body.order_data;
  
  
    const mailOptions = {
      from: 'bansalcb2021@gmail.com',
      to: req.body.email,
      subject: 'Order Confirmation',
      html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 20px;
            color: #333;
          }

          h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }

          p {
            font-size: 16px;
            margin-bottom: 10px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin-bottom: 5px;
          }

          .total {
            font-weight: bold;
          }

          .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .accent {
            color: #e62e4d;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Thank you for Ordering!</h1>
          <p>Here are your order details:</p>
          <ul>
            ${data.map((item) => `<li>${item.name} - ₹${item.price}</li>`).join('')}
          </ul>
          <p class="total">Total Items: ${data.length}</p>
          <p class="total">Total Price: ₹${data.reduce((total, item) => total + item.price, 0)}</p>
        </div>
      </body>
    </html>
  `
};
  
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).send("Error sending email.");
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ success: true });
      }
    });
  };
