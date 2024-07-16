import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imagens/LOGO DOINN.png';

const Header = () => {
  return (
    <header className="header">
      <div className="Logo hide sm:show">
        <Link to="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </Link>
      </div>
      <div className="header_menu">
        <div className="barra_cabecalho_1"></div>
        <div className="barra_cabecalho_2"></div>
        <div className="barra_cabecalho_3"></div>
        <p className="menu_texto">MENU</p>
      </div>
      <div className="Logo sm:hide">
        <Link to="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </Link>
      </div>
      <Link to="/estoque" title="NOSSO ESTOQUE" className="nosso_estoque_header">NOSSO ESTOQUE</Link>
    </header>
  );
};

export default Header;