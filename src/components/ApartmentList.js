import React, { useEffect, useState } from 'react';
import './ApartmentList.css';
import Apartment from './Apartment.js';


const ApartmentList = () => {
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
            <Apartment key={apartment} title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
                ))}
        </div>
    );
};

export default ApartmentList;