import React, { useEffect } from 'react';
import './styles/maps.css';
import './main.js'; 

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      };
    };
  }, []);

  return <div id="map"></div>;
};

export default Map;