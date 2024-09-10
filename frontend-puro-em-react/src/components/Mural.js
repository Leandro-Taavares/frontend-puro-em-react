import React from 'react';
import './Mural.css';
import mural1 from '../assets/imagens/mural1.jpeg';
import mural2 from '../assets/imagens/mural2.jpeg';
import mural3 from '../assets/imagens/mural3.jpeg';
import mural4 from '../assets/imagens/mural4.jpeg';
import mural5 from '../assets/imagens/mural5.jpeg';
import mural6 from '../assets/imagens/mural6.jpeg';
import mural7 from '../assets/imagens/mural7.jpeg';
import mural8 from '../assets/imagens/mural8.jpeg';

const Mural = () => {
  return (
    <div className="sessao_fotos">
      <div className="sessao_fotos_column mural_1 galeria_overlay">
        <img src={mural1} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_2 galeria_overlay">
        <img src={mural2} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_3 galeria_overlay">
        <img src={mural3} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_4 galeria_overlay">
        <img src={mural4} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_5 galeria_overlay">
        <img src={mural5} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_6 galeria_overlay">
        <img src={mural6} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_7 galeria_overlay">
        <img src={mural7} alt="mural" />
      </div>
      <div className="sessao_fotos_column mural_8 galeria_overlay">
        <img src={mural8} alt="mural" />
      </div>
    </div>
  );
};

export default Mural;