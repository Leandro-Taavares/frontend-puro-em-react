import React, { useEffect } from 'react';
import './styles/header.css';
import logo from './assets/imagens/LOGO DOINN.png';
import './header-menu.js'; // Importa o arquivo JavaScript

const Header = () => {
  useEffect(() => {
  }, []);

  return (
    <header className="header">
      <div className="Logo hide sm:show">
        <a href="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </a>
      </div>
      <div className="header_menu">
        <div className="barra_cabecalho_1"></div>
        <div className="barra_cabecalho_2"></div>
        <div className="barra_cabecalho_3"></div>
        <p className="menu_texto">MENU</p>
      </div>
      <div className="Logo sm:hide">
        <a href="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </a>
      </div>
      <a href="/pagina-estoque" title="NOSSO ESTOQUE" className="nosso_estoque_header">NOSSO ESTOQUE</a>
    </header>
  );
};

export default Header;