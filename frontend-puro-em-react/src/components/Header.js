import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imagens/logoDoinPadrao.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="Logo hide sm:show">
        <a to="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </a>
      </div>
      <div className="header_menu">
        <div className="barra_cabecalho_1_"></div>
        <div className="barra_cabecalho_2_"></div>
        <div className="barra_cabecalho_3_"></div>
        <p className="menu_texto_header">MENU</p>
      </div>
      <div className="Logo sm:hide">
        <Link to="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </Link>
      </div>
      <Link to="/ProductPage" title="NOSSO ESTOQUE" className="nosso_estoque_header_">NOSSO ESTOQUE</Link>
      <div class="borda_header"></div>
      <div class="header_menu_aberto">
        <a class="texto_menu_aberto" href="/frontend-puro/pagina-estoque/index.html">NOSSO ESTOQUE</a>
        <a class="texto_menu_aberto" href="/frontend-puro/pagina-contato/index.html">CONTATO</a>
        <p class="texto_menu_aberto">FINANCIE</p>
        <p class="texto_menu_aberto">ATACADO</p>
        <p class="texto_menu_aberto">SOBRE</p>
        <p class="texto_menu_aberto">AVALIAÇÕES CLIENTES</p>
    </div>
    </header>
    
  );
};

export default Header;