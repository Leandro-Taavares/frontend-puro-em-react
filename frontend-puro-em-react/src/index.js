import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import './styles/rodape.css';
import './styles/mural.css';
import './styles/maps.css';
import './styles/avaliacoes.css';
import './styles/video.css';
import './styles/header.css';
import './styles/global.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

