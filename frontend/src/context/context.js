import React, { createContext, useReducer, useContext} from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const UserContext = createContext();

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case 'REMOVE':
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case 'UPDATE':
      let arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          };
        }
        return arr;
      });
      return arr;
    case 'INCREMENT_QTY':
      let incArr = [...state];
      incArr = incArr.map((food)=>{
        if(food.id===action.id){
          return{
            ...food,
            qty:food.qty+1,
            price: food.price + food.price / food.qty,
          }
        }
        return food
      })
      return incArr;
      case 'DECREMENT_QTY':
      let decArr = [...state];
      decArr = decArr.map((food)=>{
        if(food.id===action.id){
          return{
            ...food,
            qty:food.qty-1,
            price: food.price - food.price / food.qty,
          }
        }
        return food
      })
      return decArr.filter((food) => food.qty >0);
    case 'DROP':
      return [];
    default:
      console.log('Error in cart reducer');
      return state;
  }
};

// User reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case 'USER':
      return action.payload
    default:
      console.log('Error in user reducer');
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [userState, userDispatch] = useReducer(userReducer, localStorage.getItem('token') ? true : false);

  return (
    <CartDispatchContext.Provider value={cartDispatch}>
      <CartStateContext.Provider value={cartState}>
        <UserContext.Provider value={{ userState, userDispatch }}>
          {children}
        </UserContext.Provider>
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
export const useUser = () => useContext(UserContext);
