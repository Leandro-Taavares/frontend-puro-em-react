import React from 'react';
import './Video.css';
import fundoImg from '../assets/imagens/fundo.jpg';
import logoImg from '../assets/imagens/deltaDoin.png';

const Video = () => {
  return (
    <div className="capa_video">
      <img src={fundoImg} alt="video-cliente" className="video_cliente" />
      <p className="frase_sonho">A 20 anos fazendo seu sonho se <strong className="frase_sonho_strong">tornar realidade</strong>
        <img src={logoImg} alt='logo-delta' className="logo_delta" />
      </p>  
    </div>
  );
};

export default Video;