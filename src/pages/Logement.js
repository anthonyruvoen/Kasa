import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import ApartmentInformation from '../components/ApartmentInformation';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Notfound from '../pages/Notfound';
import './Logement.css';
import { useLocation } from 'react-router-dom';

const Logement = () => {
        
        const location = useLocation();
        const [flat, setFlat] = useState();
        useEffect(fetchApartmentData, []);

        function fetchApartmentData() {
            fetch('logements.json')
                .then((res) => res.json())
                .then((flats) => {

                        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
                        if (flat.id === undefined) {
                            return (
                            <Notfound />
                            )
                        }
                        else {
                            setFlat(flat)};
                    });
            };
            if (flat) return (
                    <div className='apartment-page'>
            <Navigation />
            <Slideshow pictures={flat.pictures}/>
            <ApartmentInformation flat={flat}/>
            <div className="description">
                <Collapse title='Description' content={flat.description}/>
                <Collapse title='Equipements' content={flat.equipments.map((equipment) => (<li key={equipment}>{equipment}</li>))}/>
            </div>
            <Footer />
            </div>)
};

export default Logement;
