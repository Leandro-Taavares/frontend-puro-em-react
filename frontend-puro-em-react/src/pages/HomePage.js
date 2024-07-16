import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Map from '../components/Map';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Map />
      <Footer />
    </div>
  );
};

export default HomePage;