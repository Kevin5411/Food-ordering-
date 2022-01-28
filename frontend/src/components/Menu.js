import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function menu(props) {
    const { menu } = props;
    return (

        <div key={menu._id} className="card">
            <Link to={`/menu/${menu._id}`}>

                <img className="medium" src={menu.image} alt="menu" />
                </Link>
            
            <div className="card-body">
            <Link to={`/menu/${menu._id}`}>
                    <h2>{menu.name}</h2>
            </Link>
                <Rating rating={menu.rating} numReviews={menu.numReviews}></Rating>
                <div className="price">Rs{menu.price}</div>
            </div>
        </div>

    );
}
