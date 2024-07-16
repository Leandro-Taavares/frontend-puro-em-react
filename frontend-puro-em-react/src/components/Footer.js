import React from 'react';
import './styles/rodape.css';
import logo from '../assets/imagens/Logo Doin.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="categorias_footer">
          <img src={logo} alt="logo" className="logo_doin" />
          <nav>
            <ul className="topicos_rodape">
              <li><a href="/pagina-estoque" title="NOSSO ESTOQUE">NOSSO ESTOQUE</a></li>
              <li><a href="/pagina-contato" title="CONTATO">CONTATO</a></li>
              <li><a href="/financie" title="financie">FINANCIE</a></li>
              <li><a href="/atacado" title="atacado">ATACADO</a></li>
              <li><a href="/sobre" title="sobre">SOBRE</a></li>
            </ul>
          </nav>
        </div>
        <div className="container_conteudo_footer">
          {/* Restante do conteúdo do footer */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;