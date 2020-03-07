import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Map from './Components/Map/Map';
import './App.scss';
import { ParticlesContainer } from "./Components/Particles/ParticlesContainer";

export default function App() {
    return (
        <div className='App'>
            {/*<ParticlesContainer/>*/}
            <Header/>
            <Map/>
            <Footer/>
        </div>
    );
}
    
