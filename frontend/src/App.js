import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './context/context';
import Menu from './screens/Menu/Menu';
import SignUp from './screens/SignUp/SignUp';
import Profile from './screens/Profile/Profile';
import PageNotFound from './screens/PageNotfound/PageNotFound';
import MyOrders from './screens/OrderPage/MyOrders';
import Login from './screens/Login/Login';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import ResetPassword from './screens/ResetPassword/ResetPassword';
import Cart from './screens/Cart/Cart';


// Create a new component called AuthLayout
// const AuthLayout = ({ isLoggedIn, setIsLoggedIn, children }) => {
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoggedIn(!!localStorage.getItem('token'));
//   }, [location, setIsLoggedIn]);

//   return isLoggedIn ? <Profile /> : <ErrorPage />;
// };

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

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
            element={<Profile/>}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
