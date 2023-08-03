import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
    width: '100%',
    height: '100%'
};


export default function Map ({ geolocation }) {
    const [center, setCenter] = useState(null);
    
    useEffect(() => {
        if (geolocation) {
            setCenter(geolocation);
        }
    }, [geolocation]);

  return (
        <div className='map-container'>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} disableDefaultUI={true}>
                <Marker position={center} />
            </GoogleMap>
        </div>
  );
}
