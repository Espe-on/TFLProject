import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Map from './Components/Map/Map';

import './App.scss';

const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable:true,
          value_area: 800
        }
      },
      move: {
        enable: true,
        speed: 6
      }
    }
  }

class App extends Component {

    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className='App'>
                <Particles className='particles'
                    params={particlesOptions}
                />
                <Header />
                    <Map />
                <Footer />
            </div>
        );
    }
}

export default App;
