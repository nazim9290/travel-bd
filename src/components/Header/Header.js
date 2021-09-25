import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
           <Navbar dark>
               <div className="container">
                   <NavbarBrand className="logo" href="/">Travel bd </NavbarBrand>
               </div>
              
           </Navbar>
           <div className="hero">
           <h1>Here’s how much it costs to go <br />
                backpacking in Bangladesh</h1>
                <h2>Approximate Cost for 7-day Bangladesh Tour $ 3000</h2>
           </div>
           
        </div>
    );
};

export default Header;