import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createMenu,
    deleteMenu,
    listMenus,
  } from '../actions/menuActions.js';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { MENU_CREATE_RESET, MENU_DELETE_RESET } from '../constants/menuConstants.js';

export default function MenuListScreen(props) {
    const menuList = useSelector((state) => state.menuList);
    const { loading, error, menus } = menuList;

    const menuCreate = useSelector((state) => state.menuCreate);
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      menu: createMenu,
    } = menuCreate;
  
const menuDelete = useSelector((state) => state.menuDelete);
    const {
      loading: loadingDelete,
      error: errorDelete,
    success: successDelete,
  } = menuDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: MENU_CREATE_RESET });
      props.history.push(`/menu/${createMenu._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: MENU_DELETE_RESET });
    }
    dispatch(listMenus());

  }, [createMenu, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (menu) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteMenu(menu._id));
    }
  };
  const createHandler = () => {
    dispatch(createMenu());
  };
  return (
    <div>
      <div className="row">
        <h1>menus</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create menu
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>TYPE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu._id}>
                <td>{menu._id}</td>
                <td>{menu.name}</td>
                <td>{menu.price}</td>
                <td>{menu.category}</td>
                <td>{menu.brand}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/menu/${menu._id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(menu)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}