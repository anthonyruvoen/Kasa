import React, { useEffect, useState } from 'react';
import './AppartmentList.css';
import Appartment from './Appartment.js';


const AppartmentList = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(fetchApartments, []);
    
    function fetchApartments() {
        fetch('logements.json')
        .then((res) => res.json())
        .then((res) => setApartments(res))
        .catch(console.error);
    }
    return (
        <div className='list'>
            {apartments.map((apartment) => (
            <Appartment title={apartment.title} imageUrl={apartment.cover} />
                ))}
        </div>
    );
};

export default AppartmentList;