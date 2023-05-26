import React from 'react';
import Navigation from '../components/Navbar';
import Banner from '../components/Banner';
import AppartmentList from '../components/AppartmentList';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AppartmentList />
            <Footer />
        </div>
    );
};

export default Home;