import React from 'react';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import './About.css';

const About = () => {
    return (
        <div>
        <Navigation />
        <div className="about-banner">
            <Banner />
        </div>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Footer />
        </div>
    );
};

export default About;