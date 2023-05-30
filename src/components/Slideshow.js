import React, { useState } from 'react';
import './Slideshow.css';

const Slideshow = (props) => {
    const pictures = props.pictures;
    
const [currentPicture, setCurrentPicture] = useState(0);

const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
};
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    }
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
            return;
        }
        setCurrentPicture(currentPicture - 1); 
    };


    const arePicturesAvailable = () => {
        return pictures && pictures.length > 0;
    };


    const getCarouselOrAbout = () => {
        if (!arePicturesAvailable()) {
            return <img src="./IMG3.png" alt="à propos" className='show' />;   
        }
        return pictures.map((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ));
    };
        
    return (
        <div className='slideshow'>
            <div className="slideshow-container">
            {getCarouselOrAbout()}
            </div>
                {arePicturesAvailable() && (
                <div>
                    <button className="btn btn-previous" onClick={moveToPrevious}><i className="fas fa-chevron-left"></i></button>
                    <button className="btn btn-next" onClick={moveToNext}><i className="fas fa-chevron-right"></i></button>
                </div>
                )}
        </div>
    );
    }
export default Slideshow;