import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import About from './pages/About';
import Logement from './pages/Logement';
import'./App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Notfound />} />
        <Route path="/logement" element={<Logement />} errorElement={<Notfound />} />
        <Route path="/about" element={<About />} errorElement={<Notfound />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;