import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
// import { geolocated } from "react-geolocated";

import './Map.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
    const [viewport, setViewport] = useState({
        width: 1000,
        height: 600,
        latitude: 51.412775,
        longitude: -0.082604,
        zoom: 13
    });

    return (
        <div className='map-container'>
            <ReactMapGL className='map'
                mapboxApiAccessToken={'pk.eyJ1IjoibHVjZTE0NSIsImEiOiJjazdocnB4dDAwY2s3M2ZvM2c2eXA4MmNkIn0.D9Uwds6ubO-m33asS5-9fw'}
                {...viewport}
                onViewportChange={setViewport}
            />
        </div>
    );
}

export default Map;