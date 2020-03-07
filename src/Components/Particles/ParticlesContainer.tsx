import React from "react";
import Particles from "react-particles-js";

const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        move: {
            enable: true,
            speed: 6
        }
    }
};

export function ParticlesContainer() {
    return (
        <Particles className='particles'
                   params={particlesOptions}
        />
    )
}