
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { menuCreateReducer, menuDeleteReducer, menuDetailsReducer, menuListReducer, menuUpdateReducer } from './reducers/menuReducers';
import { userSigninReducer,userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer,orderDeleteReducer,orderDeliverReducer,orderDetailsReducer, orderListReducer, orderMineListReducer } from './reducers/orderReducers';

const intialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
    cart: {
        cartItems:localStorage.getItem('cartItems')
        ?JSON.parse(localStorage.getItem('cartItems'))
        :[],
        orderingAddress: localStorage.getItem('orderingAddress')
        ?JSON.parse(localStorage.getItem('orderingAddress'))
        :[],
        paymentMethod: 'googlePay',   
    },

};
const reducer = combineReducers({
    menuList: menuListReducer,
    menuDetails: menuDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    menuCreate: menuCreateReducer,
    menuUpdate: menuUpdateReducer,
    menuDelete: menuDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList:userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
});
    
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, intialState, composeEnhancer(applyMiddleware(thunk)));
export default store;