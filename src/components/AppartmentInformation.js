import React from 'react';
import './AppartmentInformation.css';

const AppartmentInformation = () => {
    return (
        <div className='appartment-information-owner'>
            <div className='appartment-information'>
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <p>Paris, Ile-de-France</p>
                    <div className="keywords">
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
                    </div>
            </div>
            <div className='appartment-owner'>
                <div className='owner-name-pic'>
                    <h1 id="owner">Alexandre Dumas</h1>
                    <div id="pic"></div>
                </div>
                <div id="stars">
                    <span><i className="fa-solid fa-star red"></i></span>
                    <span><i className="fa-solid fa-star red"></i></span>
                    <span><i className="fa-solid fa-star red"></i></span>
                    <span><i className="fa-solid fa-star grey"></i></span>
                    <span><i className="fa-solid fa-star grey"></i></span>
                </div>
            </div>
        </div>
    );
};

export default AppartmentInformation;