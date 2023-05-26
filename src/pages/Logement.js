import React from 'react';
import Navigation from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import AppartmentInformation from '../components/AppartmentInformation';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import './Logement.css';

const Logement = () => {
    return (
        <div>
        <Navigation />
        <Slideshow />
        <AppartmentInformation />
        <div className="description">
            <Collapse />
            <Collapse />
        </div>
        <Footer />
        </div>
    );
};

export default Logement;