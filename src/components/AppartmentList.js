import React from 'react';
import './AppartmentList.css';
import Appartment from './Appartment.js';

const AppartmentList = () => {
    return (
        <div className='list'>
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
        </div>
    );
};

export default AppartmentList;