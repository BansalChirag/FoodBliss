import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './screens/Menu';
import Cart from './screens/Cart';
import MyOrders from './screens/MyOrders';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import { CartProvider } from './context/context';
import ErrorPage from './screens/ErrorPage';
import Profile from './screens/Profile';

// Create a new component called AuthLayout
const AuthLayout = ({ isLoggedIn, setIsLoggedIn, children }) => {
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location, setIsLoggedIn]);

  return isLoggedIn ? <Profile /> : <ErrorPage />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu/>} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/user/passwordReset/:id/:token" element={<ResetPassword />} />
          <Route
            exact
            path="/profile"
            element={<AuthLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
