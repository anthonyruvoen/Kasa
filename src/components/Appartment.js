import React from 'react';
import './Appartment.css';
import { NavLink } from 'react-router-dom';

const Appartment = (props) => {
    return (
        <div className="appartment">
        <NavLink to='/Logement'>
                <div className="appartment-card">
                    <img src={props.imageUrl} alt={props.title} />
                    <div className="appartment_title">{props.title}</div>
                </div>
            </NavLink>
        </div>
            );
};

export default Appartment;