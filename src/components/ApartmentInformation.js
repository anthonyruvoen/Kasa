import React from 'react';
import './ApartmentInformation.css';

const ApartmentInformation = (props) => {
    return (
        <div className='apartment-information-owner'>
            <div className='apartment-information'>
                <h1>{props.flat.title}</h1>
                <p>{props.flat.location}</p>
                    <div className="keywords">
                {props.flat.tags.map((tag) => (<span key={tag}>{tag}</span>))}
                    </div>
            </div>
            <div className='apartment-owner'>
                <div className='owner-name-pic'>
                    <h1 id='owner'>{props.flat.host.name}</h1>
                    <div id='pic'><img src={props.flat.host.picture} alt={props.flat.host.name} /></div>
                </div>
                <div id='stars'>

                {[1, 2, 3, 4, 5].map((num) => (
                <span key={num}><i className={props.flat.rating >= num ? "fa-solid fa-star red" : "fa-solid fa-star"}></i></span>
                ))}
                </div>
            </div>
        </div>
    );
};

export default ApartmentInformation;