import React, { useEffect, useState } from 'react';
import Product from './../Product/Product';
import "./Home.css";
const Home = () => {
 const [products,setProducts]=useState([])

 useEffect(()=>{
     fetch("./traveldata.JSON")
     .then(res=>res.json())
     .then(data=>setProducts(data))
 },[])

    return (
        <div className="home">
            <div className="product-container">
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                ></Product>)
            }
            </div>
         <div className="cart-container">
            <h1>order details</h1>
        </div>            

        </div>
    );
};

export default Home;