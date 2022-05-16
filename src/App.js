import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Beergarden from './components/Beergarden/Beergarden';
import RateMyBeer from './components/RateMyBeer/RateMyBeer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import About from './components/About/About';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<RateMyBeer />} />
            <Route path="beergarden" element={<Beergarden />} />
            <Route path="about" element={<About />} />
            <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;