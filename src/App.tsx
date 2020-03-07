import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from "react-particles-js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Particles/>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>learn react</p>
            </header>
        </div>
    );
}

export default App;
