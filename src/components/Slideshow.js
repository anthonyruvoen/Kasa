import React from 'react';
import './Slideshow.css';

const Slideshow = (props) => {
    return (
        <div className='slideshow'>
            <img src={props.imageUrl} alt="" />
        </div>
    );
};

export default Slideshow;