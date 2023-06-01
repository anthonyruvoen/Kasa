import React from 'react';
import './Apartment.css';
import { NavLink } from 'react-router-dom';


const Apartment = (props) => {
    return (
       <div className="apartment">
        <NavLink to={'/Logement'+'?_id='+props.id} state={{apartmentId: props.id}}>                  
        <div className="apartment-card">
                    <img src={props.imageUrl} alt={props.title} />
                    <div className="apartment_title">{props.title}</div>
                </div>
            </NavLink>
        </div>
            );
};

export default Apartment;