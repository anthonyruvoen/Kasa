import React from 'react';
import Navigation from '../components/Navbar';
import Banner from '../components/Banner';
import ApartmentList from '../components/ApartmentList';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <ApartmentList />
            <Footer />
        </div>
    );
};

export default Home;