import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './../Product/Product';
import "./Home.css";
const Home = () => {
 const [products,setProducts]=useState([]);
 const [cart,setCart]=useState([])

 useEffect(()=>{
     fetch("./traveldata.JSON")
     .then(res=>res.json())
     .then(data=>setProducts(data))
 },[])
        const handleAddtToCart=(product)=>{
            const newCart=[...cart,product]
            setCart(newCart)
        }

    return (
        <div className="home">
            <div className="product-container">
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddtToCart={handleAddtToCart}
                ></Product>)
            }
            </div>
         <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>            

        </div>
    );
};

export default Home;