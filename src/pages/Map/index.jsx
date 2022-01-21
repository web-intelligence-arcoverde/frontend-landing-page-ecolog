import React from 'react';
import Map from '../../components/atomic/Map';
import Header from '../../components/molecule/Header';
import { Container } from './styled';

function MapPage() {
  return (
    <Container>
      <Header />
      <Map />
    </Container>
  );
}

export default MapPage;