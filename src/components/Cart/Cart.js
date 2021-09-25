import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart}=props.cart;
    console.log(props.cart);
    let totalQuantity=0;
    let total=0;
    for(const product of props.cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
        <div className="cart">
             <h3>Order Summary</h3>
             <br />
            <h5>Items Ordered: {totalQuantity}</h5>
            <p>Total: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;