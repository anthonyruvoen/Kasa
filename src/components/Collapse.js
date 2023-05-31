import React, { useState } from 'react';
import './Collapse.css';

const Collapse = (props) => {

    const [isContentVisible, setIsContentVisible] = useState(true);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    };
    const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
    return (
        <div className="collapse" onClick={showContent}>
            <div className="description-title">
                <h2>{props.title}</h2>
                <span><i className={chevronClass}></i></span>
             </div>
                {isContentVisible && <p>{props.content}</p>}
        </div>
    );
};

export default Collapse;