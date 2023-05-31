import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="notfound">
            <Navbar />
            <div className="notfound-text">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/"><div>Retourner sur la page d'accueil</div></NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Notfound;