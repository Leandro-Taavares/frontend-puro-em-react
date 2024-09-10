import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Maps.css';

const Marker = ({ text }) => <div className="marker">{text}</div>;

const Map = ({ hideTitle = false, smallSize = false }) => {
  const defaultProps = {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 8,
  };

  return (
    <div className={`map-container ${smallSize ? 'small' : ''}`}>
      {!hideTitle && (
        <div className="onde_encontrar">
          <h3 className="titulo_onde_encontrar">Onde nos encontrar?</h3>
          <div className="seta"></div>
        </div>
      )}
      <div id="map" className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCDCkBnwmO2WDKZF9C9H68w-WmeFSrHZfs' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={-34.397}
            lng={150.644}
            text="Localização"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;