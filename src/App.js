import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Body from './components/Body'
import MapSection from './components/Map' // import the map here

const location = {
  address: 'Village Valet Cleaners 1988 Merrick Rd, Merrick, NY 11566',
  lat: 40.655587,
  lng: -73.549739,
} // our location object from earlier

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Body />
      <MapSection location={location} zoomLevel={15} />
    </div>
  );
}

export default App;
