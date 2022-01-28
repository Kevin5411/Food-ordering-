import axios from "axios";
import { MENU_CREATE_FAIL, MENU_CREATE_REQUEST, MENU_CREATE_SUCCESS, MENU_DELETE_FAIL, MENU_DELETE_REQUEST, MENU_DELETE_SUCCESS, MENU_DETAILS_FAIL, MENU_DETAILS_REQUEST, MENU_DETAILS_SUCCESS, MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS, MENU_UPDATE_FAIL, MENU_UPDATE_REQUEST, MENU_UPDATE_SUCCESS } from "../constants/menuConstants"


export const listMenus = () => async (dispatch) =>{
    dispatch ({
        type: MENU_LIST_REQUEST
    });
    try {
        const { data } = await axios.get('api/menus');
        dispatch({type: MENU_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: MENU_LIST_FAIL, payload: error.message});
    }
};
export const detailsMenus = (menuId) => async(dispatch) => {
    dispatch ({type: MENU_DETAILS_REQUEST, payload: menuId});
    try{
        const { data } =  await axios.get(`/api/menus/${menuId}`);
        dispatch({type: MENU_DETAILS_SUCCESS,payload: data});
    } catch(error) {
        dispatch({type: MENU_DETAILS_FAIL,payload:error.response && error.response.data.message ?
        error.response.data.message: error.message,});
    }
};

export const createMenu = () => async (dispatch, getState) => {
    dispatch({ type: MENU_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(
        '/api/menus',
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: MENU_CREATE_SUCCESS,
        payload: data.menu,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: MENU_CREATE_FAIL, payload: message });
    }
  };

  export const updateMenu = (menu) => async (dispatch, getState) => {
    dispatch({ type: MENU_UPDATE_REQUEST, payload: menu });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(`/api/menus/${menu._id}`, menu, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: MENU_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: MENU_UPDATE_FAIL, error: message });
    }
  };

  export const deleteMenu = (menuId) => async (dispatch, getState) => {
    dispatch({ type: MENU_DELETE_REQUEST, payload: menuId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } =  await axios.delete(`/api/menus/${menuId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: MENU_DELETE_SUCCESS, payload:data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: MENU_DELETE_FAIL, payload: message});
    }
  };