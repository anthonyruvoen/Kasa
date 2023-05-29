import React, { useState } from 'react';
import './Collapse.css';

const Collapse = (props) => {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    };
    return (
        <div className="collapse" onClick={showContent}>
            <div className="description-title">
                <h2>{props.title}</h2>
                <span><i className="fa-solid fa-chevron-down"></i></span>
             </div>
                {isContentVisible && <p>{props.content}</p>}
        </div>
    );
};

export default Collapse;