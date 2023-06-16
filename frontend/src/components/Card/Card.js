import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useCart, useDispatchCart } from "../../context/context";
import './Card.css'

// import { Link } from "react-router-dom";
const Card = (props) => {
  const dispatch = useDispatchCart();
  const [qty] = useState(1);
  const [size, setSize] = useState("");
  const data = useCart();
  const foodItem = props.foodItem;
  const options = props.options;

  const priceRef = useRef();
  const priceOption = Object.keys(options);

  const handleCart = () => {
    const existingItem = data.find((item) => item.id === foodItem.id && item.size === size);
  
    if (existingItem) {
      console.log(size)
      // dispatch({
      //   type: "UPDATE",
      //   id: foodItem.id,
      //   price: finalPrice,
      //   qty: qty,
      // });
      toast.error("Item is already present in the cart.");
    } else {
      dispatch({
        type: "ADD",
        id: foodItem.id,
        name: foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: foodItem.img,
      });
      toast.success("Item added to cart.");
    }
  };
  
  
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <>
      <div className="card-wrapper">
        <div className="singleCard">
          <img
            src={foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{foodItem.name}</h5>
            <div className="price-container">
              <select
                className="options"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOption.map((data) => {
                  return (
                    <option value={data} key={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="price">₹{finalPrice}/-</div>
            </div>
            <hr />
            <div className="add-btn">
              <button onClick={handleCart}>ADD to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
