import React from 'react';
import Navigation from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import AppartmentInformation from '../components/AppartmentInformation';
import AppartmentDescription from '../components/AppartmentDescription';
import Footer from '../components/Footer';

const Logement = () => {
    return (
        <div>
        <Navigation />
        <Slideshow />
        <AppartmentInformation />
        <AppartmentDescription />
        <Footer />
        </div>
    );
};

export default Logement;