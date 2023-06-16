import React, { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import PaddingTop from '../../components/paddingTop/PaddingTop';
import './MyOrders.css';
import { useNavigate } from 'react-router-dom';



const MyOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const fetchMyOrder = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/myOrders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });
      const data = await response.json();
      setOrderData(data.orderData.order_data);
    } catch (error) {
      console.log("Error:", error.message);
      // Handle the error
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  // Sort orderData in descending order based on order date
  const sortedOrderData = [...orderData].sort((a, b) => new Date(b[0].Order_date) - new Date(a[0].Order_date));

  return (
    <PaddingTop>
      <Navbar />
      <div className='my-orders'>
        {sortedOrderData.length > 0 ? (
          sortedOrderData.map((orderArray, index) => (
            <div key={index} className='order-group'>
              {orderArray.length > 0 && orderArray[0].Order_date && (
                <div>
                  <div className='order-date'>
                    <h3>{orderArray[0].Order_date}</h3>
                    <hr />
                  </div>
                  <div className='order-list'>
                    {orderArray.map((order, orderIndex) => (
                      order.name && order.price && order.img && (
                        <div key={orderIndex} className="order-item">
                          <img src={order.img} className="order-image" alt="Order Item" />
                          <div className="order-details">
                            <h5 className="order-title">{order.name}</h5>
                            <div className='order-info'>
                              <span className='order-quantity'>{order.qty}</span>
                              <span className='order-size'>{order.size}</span>
                            </div>
                            <div className='order-price'>₹{order.price}/-</div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='no-orders'>
            <img src="/no-orders.png" alt="No Orders" className="no-order-image" />
            <p className="no-order-text">You have not made any orders yet</p>
            <button className="go-to-menu-button" onClick={handleClick}>Go to Menu</button>
          </div>
        )}
      </div>
    </PaddingTop>
  );
};

export default MyOrders;
