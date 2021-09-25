import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import "./Header.css";

const Header = () => {
    return (
        <div>
           <Navbar dark color ="dark">
               <div className="container">
                   <NavbarBrand className="logo" href="/">Travel bd </NavbarBrand>
               </div>
              
           </Navbar>
           <h1>Here’s how much it costs to go backpacking in Bangladesh</h1>
        </div>
    );
};

export default Header;