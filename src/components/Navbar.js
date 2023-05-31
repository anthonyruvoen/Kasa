import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
        <NavLink to='/'>
        <img src="../logo192.png" id="logo" alt="Logo Kasa" />
        </NavLink>
       <nav className="nav">
            <NavLink className="linktext" to="/">
                <div>Accueil</div>
            </NavLink>
            <NavLink className="linktext" to="/about">
                <div>A propos</div>
            </NavLink>
    
       </nav>
        </div>
            
    );
};

export default Navbar;