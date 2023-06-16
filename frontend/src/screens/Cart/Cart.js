import React, { useState } from "react";
import { useCart, useDispatchCart } from "../../context/context";
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./Cart.css";

import { ReactComponent as LoadingIcon } from '../../components/assets/loading.svg';
import { BiMinus, BiPlus } from 'react-icons/bi';
import DeleteIcon from '@mui/icons-material/Delete';
import PaddingTop from "../../components/paddingTop/PaddingTop";


const Cart = () => {
  const data = useCart();
  const navigate = useNavigate()
  const dispatch = useDispatchCart();
  const [isLoading, setIsLoading] = useState(false)
  const handleCheckout = async () => {
    console.log(data);
    const userEmail = localStorage.getItem('userEmail');
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cartData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });
  
      if (response.status === 200) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Your order has been placed successfully.");
        }, 2000);
        setTimeout(() => {
          dispatch({ type: "DROP" });
          navigate('/orders');
        }, 3000);
        
        // Send email to the user
        const emailResponse = await fetch(`${process.env.api_url}/sendEmail`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            order_data: data,
            email: userEmail,
          })
        });
        
        if (emailResponse.status === 200) {
          console.log('Email sent successfully');
        } else {
          console.log('Failed to send email');
        }
      } else {
        navigate('/login');
        // setIsLoading(true);
        // setTimeout(() => {
        //   setIsLoading(false);
        //   toast.error("Failed to place the order. Please try again.");
        // }, 2000);
      }
    } catch (error) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.error("Error occurred in placing your order. Please try again later.");
      }, 2000);
    }
  };



  if (data.length === 0) {
    return (
      <PaddingTop>
				<div className="error-wrapper">
					<div className="error">
						<img
							className="img"
							src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
							alt=""
						/>
						<h1>Your cart is empty</h1>
						<div className="links">
							<span
								onClick={() => {
									navigate('/');
								}}
								className="retry">
                Go to menu
							</span>
						</div>
					</div>
				</div>
			</PaddingTop>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  console.log(totalPrice);

  const handleClearCart = () => {
    dispatch({ type: "DROP" });
  };

  const handleDecQTy = (foodItemId)=>{
    dispatch({type:"DECREMENT_QTY",id:foodItemId});
  }
  const handleIncQTy = (foodItemId)=>{
    dispatch({type:"INCREMENT_QTY",id:foodItemId})
  }

  return (
    <>
      <PaddingTop/>
      <div className="checkout-wrapper">
        <div className="checkout">
          <div class="nav">
          <button
          className="bck"
          onClick={() => {
            navigate(-1);
          }}>
          Back
        </button>
        <button className="clr" onClick={handleClearCart}>
          Clear Cart
        </button>
          </div>
          <div class="items-wrapper">
            {
              data.map((foodItem,index)=>{
                return <div key={index} className="item">
                  <div className="name">
                    {
                      foodItem.img?(
                        <img src={foodItem.img} className="img" alt=""></img>
                      ):
                      (
                        <div className="img">NO IMG</div>
                      )
                    }
                    <span>{foodItem.name}({foodItem.size})</span>
                  </div>
                  <div className="controls">
									<div>
										<span
											className="btns" onClick={()=>handleDecQTy(foodItem.id)}>
                      <BiMinus />
										</span>
										<span>{foodItem.qty}</span>
										<span
											className="btns" onClick={()=>handleIncQTy(foodItem.id)}>
                      <BiPlus />
										</span>
									</div>
								</div>
                <div className="price">
									₹{foodItem.price}
								</div>
                <div>
                  <DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} className="delete-icon"/>
                </div>
                </div>
              })}
          </div>
          <div className="price-box">
						<span className="price-tag">Total Amount</span>
						<span className="price">
							₹{totalPrice}
						</span>
					</div>
          <div
          className="order-box">
          <button onClick={handleCheckout}>
          {
            isLoading?
            <LoadingIcon className="loading-icon" style={{color:'#fff',height: '100%'}}/>
            :"Order"
          }
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
