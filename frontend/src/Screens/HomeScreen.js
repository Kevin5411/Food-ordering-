import React, { useEffect } from 'react';
import Menu from '../components/Menu';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listMenus } from '../actions/menuActions';



export default function HomeScreen() {
    const dispatch = useDispatch();
    const menuList = useSelector((state) => state.menuList);
    const { loading, error, menus } = menuList
    useEffect(() => {
        dispatch(listMenus());
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>

            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                    {
                        menus.map((menu) => (
                            <Menu key={menu._id} menu={menu}></Menu>
                        ))
                    }


                </div>
            )}

        </div>
        );


}
