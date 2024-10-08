import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeBrand, toggleFuelLabel } from "../store/reduxReact";
import logo from "../assets/imagens/logoDoinPadrao.png";
import telefoneBranco from "../assets/imagens/telefoneBranco.png";
import whatsAppPreto from "../assets/imagens/whatsAppPreto.png";
import youtube from "../assets/imagens/youtube.png";
import facebook from "../assets/imagens/facebook.png";
import instagram from "../assets/imagens/instagram.png";

const Footer = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeBrand("MECABENZ"));
    dispatch(toggleFuelLabel());
  };

  return (
    <footer>
      <div className="container">
        <div className="categorias_footer">
          <img src={logo} alt="logo" className="logo_doin" onClick={handleClick} />
          <nav>
            <ul className="topicos_rodape">
              <li>
                <Link to="/ProductPage" title="NOSSO ESTOQUE">
                  NOSSO ESTOQUE
                </Link>
              </li>
              <li>
                <Link to="/ContatoPage" title="CONTATO">
                  CONTATO
                </Link>
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
                    <a class="espacamento" href="https://www.facebook.com/doinmotors" target="_blank" rel=""><img src={facebook} alt="facebook"/></a>
                    <a class="espacamento" href="https://www.youtube.com/c/DoinMotors" target="_blank" rel=""><img src={youtube} alt="youtube"/></a>
                    <a class="espacamento" href="https://www.instagram.com/doinmotors/" target="_blank" rel=""><img src={instagram} alt="instagram"/></a>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
