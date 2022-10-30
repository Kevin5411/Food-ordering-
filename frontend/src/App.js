import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter, Link, Route,} from 'react-router-dom'
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import './App.css';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import OrderScreen from './Screens/OrderScreen';
import MenuScreen from './Screens/MenuScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import OrderingAddressScreen from './Screens/OrderingAddressScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import OrderListScreen from './Screens/OrderListScreen';
import MenuEditScreen from './Screens/MenuEditScreen';
import UserListScreen from './Screens/UserListScreen';
import MenuListScreen from './Screens/MenuListScreen';
import UserEditScreen from './Screens/UserEditScreen';



function App() {
  const cart = useSelector((state)=> state.cart);
  const{ cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  //sidebar
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/menus/categories`);
        setCategories(data);
      } catch (err) {
        // toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

   return(
       <BrowserRouter>
       <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
        
      ></div>

 
        
         
      <header className="row">
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container></Container>
            <Button 
              variant="dark"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <i className="fas fa-bars"></i>
            </Button>


   return(
       <BrowserRouter>
<div className="grid-container">
      <header className="row">
        <div>
         <Link className="type" to="/">Food Ordering System</Link>
        </div>
        <div>
         <Link to="/cart">
         Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
         </Link>
         {userInfo ? (
           <div className="dropdown">
             <Link to="#">
               {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
             </Link>
             <ul className="dropdown-content">
             <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
             <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
               <li>
                 <Link to="#signout" onClick={signoutHandler}> Sign Out</Link>
               </li>
             </ul>
           </div>
         ): (
           <Link to="/signin">Sign In</Link>
         )}
         {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/menulist">Menus</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/menu/:id" component={MenuScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/ordering" component={OrderingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen} exact></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/menu/:id/edit"
            component={MenuEditScreen}
            exact
          ></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <AdminRoute
            path="/menulist"
            component={MenuListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <Route path="/"component={HomeScreen} exact></Route>

          
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
   );
}
   

export default App;