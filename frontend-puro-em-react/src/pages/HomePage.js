  import React from 'react';
  import Video from '../components/Video';
  import Avaliacoes from '../components/Avaliacoes';
  import Mural from '../components/Mural';
  import Map from '../components/Map';

  const HomePage = () => {
    return (
      <div>
        <Video />
        <Avaliacoes />
        <Mural />
        <Map />
      </div>
    );
  };

  export default HomePage;