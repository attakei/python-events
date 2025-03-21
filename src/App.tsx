import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import './App.css';
import { events, geocodes } from './assets';

function App() {
  const worldBounds = L.latLngBounds([-90, -180], [90, 180]);
  const maxBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  return (
    <>
      <h1>Python Events</h1>
      <MapContainer
        bounds={worldBounds}
        maxBounds={maxBounds}
        center={[30, 0]}
        zoom={2}
        style={{
          height: '50vh',
          maxWidth: '50vw',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events
          .filter((e) => e.location in geocodes)
          .map((e) => (
            <Marker position={geocodes[e.location]} key={e.uid}>
              <Popup>{e.title}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
}

export default App;
