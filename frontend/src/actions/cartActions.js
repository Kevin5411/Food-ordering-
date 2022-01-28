import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_ORDERING_ADDRESS, CART_SAVE_PAYMENT_METHOD} from '../constants/cartConstants';

export const addToCart = (menuId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/menus/${menuId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      menu: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (menuId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: menuId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };

  export const saveOrderingAddress = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_ORDERING_ADDRESS, payload:data});
    localStorage.setItem('orderingAddress', JSON.stringify(data));
  };
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };