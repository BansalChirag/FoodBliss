import React from 'react'
import { useCart } from '../../context/context'
import { FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './FloatingCart.css'

const FloatingCart = () => {
    const data = useCart();
    const navigate = useNavigate()
    const totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    data.length>0 && (
        <div className="floating-cart-wrapper">
            <div className="floating-cart">
                <span className="left">
                    {data.length} Items |  ₹ {totalPrice}
                    
                </span>
                <span
						className="right"
						onClick={() => {
							navigate('/cart');
						}}>
						<span>VIEW CART</span>
						<FiShoppingBag className="icon" />
					</span>
            </div>
        </div>
    )
  )
}

export default FloatingCart