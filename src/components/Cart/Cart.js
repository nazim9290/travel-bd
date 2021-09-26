import React from 'react';
import "./Cart.css";
import CartName from './CartName';

const Cart = (props) => {
const pdName= props.pdname;
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
            <p>Total: ${total}</p>
            <div> {
                pdName.map(pd=><CartName
                    key={pd.id}
                     pd={pd}/>)
                }</div>
                <button>Payment Now</button>
        </div>
    );
};

export default Cart;