import React from "react";
import "../styles/rodape.css";
import logo from "../assets/imagens/logoDoinPadrao.png";
import telefoneBranco from "../assets/imagens/telefoneBranco.png";
import whatsAppPreto from "../assets/imagens/whatsAppPreto.png";
import youtube from "../assets/imagens/youtube.png";
import facebook from "../assets/imagens/facebook.png";
import instagram from "../assets/imagens/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="categorias_footer">
          <img src={logo} alt="logo" className="logo_doin" />
          <nav>
            <ul className="topicos_rodape">
              <li>
                <a href="/pagina-estoque" title="NOSSO ESTOQUE">
                  NOSSO ESTOQUE
                </a>
              </li>
              <li>
                <a href="/pagina-contato" title="CONTATO">
                  CONTATO
                </a>
              </li>
              <li>
                <a href="/financie" title="financie">
                  FINANCIE
                </a>
              </li>
              <li>
                <a href="/atacado" title="atacado">
                  ATACADO
                </a>
              </li>
              <li>
                <a href="/sobre" title="sobre">
                  SOBRE
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="container_conteudo_footer">
                <div class="localidade" data-loja="1">
                    <p class="titulo_loja">Shopping The Blue</p>
                    <div class="telefone">
                        <img src={telefoneBranco} alt="Telefone" className="imagem_telefone"/>
                        <a class="numero_telefone" href="tel:+5535130377">(13) 3513-0377</a>
                    </div>
                    <div class="whatsapp">
                        <img src={whatsAppPreto} alt="Telefone" class="imagem_whatsapp"/>
                        <a class="numero_telefone" href="tel:+551332321021">(13) 3232-1021</a>
                    </div>
                    <p class="horario_funcionamento">Segunda a Sexta feira: 8h ás 19h Sábado: 9h ás 13h</p>
                </div>
                <div class="localidade" data-loja="2">
                    <p class="titulo_loja">Vila dos Carros</p>
                    <div class="telefone">
                        <img src={telefoneBranco} alt="Telefone" class="imagem_telefone"/>
                        <a class="numero_telefone" href="tel:+551335139770">(13) 3513-9770</a>
                    </div>
                    <div class="whatsapp">
                        <img src={whatsAppPreto} alt="Telefone" class="imagem_whatsapp"/>
                        <a class="numero_telefone" href="tel:+5513974025502">(13)97402-5502</a>
                    </div>
                    <p class="horario_funcionamento">Segunda á Sabado: 09h ás 19h</p>
                </div>
                <div class="redes_sociais">
                    <a class="espacamento" href="https://www.facebook.com/doinmotors"><img src={facebook} alt="facebook"/></a>
                    <a class="espacamento" href="https://www.youtube.com/c/DoinMotors"><img src={youtube} alt="youtube"/></a>
                    <a class="espacamento" href="https://www.instagram.com/doinmotors/"><img src={instagram} alt="instagram"/></a>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
