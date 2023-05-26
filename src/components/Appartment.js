import React from 'react';
import './Appartment.css';
import { NavLink } from 'react-router-dom';

const Appartment = () => {
    return (
        <div className='appartment'>
            <NavLink to='/Logement'><div className="appartment_title">Titre de la location</div></NavLink>
            
        </div>
    );
};

export default Appartment;