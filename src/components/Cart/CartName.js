import React from 'react';
import "./Cart.css";

const CartName = (props) => {
    return (
        <div className="cart-name">
            <img className="cart-img" src={props.pd.img} alt="" />
             <h5 style={{width:"150px"}}>{props.pd.name}</h5>
             <h5><a href="#">&#10005;</a></h5>
        </div>
    );
};

export default CartName;