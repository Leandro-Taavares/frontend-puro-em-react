import React from 'react';
import './styles/reset.css';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Map from './components/Map';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Map />
      <Footer />
    </div>
  );
};

export default App; 
