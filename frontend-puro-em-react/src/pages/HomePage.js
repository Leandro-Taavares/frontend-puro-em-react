import React from 'react';
import Header from '../components/Header';
import Video from '../components/Video';
import Avaliacoes from '../components/Avaliacoes';
import Mural from '../components/Mural';
import Map from '../components/Map';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Video />
      <Avaliacoes />
      <Mural />
      <Map />
      <Footer />
    </div>
  );
};

export default HomePage;