import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imagens/logoDoinPadrao.png';
import "../styles/header-estoque.css"

const Header = () => {
  return (
    <header class="header_estoque">
        <div class="header_menu">
            <div class="barra_cabecalho_1"></div>
            <div class="barra_cabecalho_2"></div>
            <div class="barra_cabecalho_3"></div>
            <p class="menu_texto">MENU</p>
        </div>
        <div class="Logo">
        <Link to="/" title="Doin">
          <img className="logo-tamanho" src={logo} alt="Doin Motors" />
        </Link>
        </div>
        <Link to="/ProductPage" title="NOSSO ESTOQUE" className="nosso_estoque_header">NOSSO ESTOQUE</Link>
        <div class="header_menu_aberto">
        <a href="/frontend-puro/pagina-estoque/index.html" class="texto_menu_aberto">NOSSO ESTOQUE</a>
        <a href="/frontend-puro/pagina-contato/index.html" class="texto_menu_aberto">CONTATO</a>
        <p class="texto_menu_aberto">FINANCIE</p>
        <p class="texto_menu_aberto">ATACADO</p>
        <p class="texto_menu_aberto">SOBRE</p>
        <p class="texto_menu_aberto">AVALIAÇÕES CLIENTES</p>
    </div>
    </header>
  );
};

export default Header;