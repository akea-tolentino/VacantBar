import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const containerStyle = {
  width: '80%',
  height: '15vh'
};

const center = {
  lat: -33.8688,
  lng: 151.2093
};

export default function Map () {
  return (
    <LoadScript googleMapsApiKey="AIzaSyByu_D9VCS98NR9SqLjwTxuoiHoVZGEuP4">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} disableDefaultUI={true}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
