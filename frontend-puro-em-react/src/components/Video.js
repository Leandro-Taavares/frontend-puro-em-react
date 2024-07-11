import React from 'react';
import '../styles/video.css';
import fundoImg from '../assets/imagens/Fundo.jpg';
import logoImg from '../assets/imagens/Vector 2.png';

const Video = () => {
  return (
    <div className="capa_video">
      <img src={fundoImg} alt="video" className="video_cliente" />
      <p className="frase_sonho">A 20 anos fazendo seu sonho se <strong className="frase_sonho_strong">tornar realidade</strong>
        <img src={logoImg} className="logo_delta" />
      </p>  
    </div>
  );
};

export default Video;