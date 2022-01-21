import GoogleMapReact from 'google-map-react';
import React from 'react';
import { Container } from './styled';


function Map() {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD3BCCRJTCxSjb5IU84R2NuPd7bUkbHrjY' }}
        center={{
          lat: -8.419855236824226,
          lng: -37.060810707269674,
        }}
        defaultZoom={15}
      ></GoogleMapReact>
    </Container >
  );
}

export default Map;