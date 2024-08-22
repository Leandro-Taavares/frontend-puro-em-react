import React from "react";
import HeaderProduct from "../components/HeaderProduct";
import Footer from "../components/Footer";
import "../styles/anuncios-carros-semelhantes.css";
import "../styles/informacoes-carro.css";
import "../styles/footer-estoque-detalhe.css";
import "../styles/carossel.css";
import "../styles/reset.css";

//imagens//

import whatsApp from "../assets/imagens/whatsApp.png"
import telefoneBranco from "../assets/imagens/telefonePreto.png";
import localizacaoMapa from "../assets/imagens/localizacaoMapa.png";
import sifrao from "../assets/imagens/simboloDinheiro.png";
import setaMobile from "../assets/imagens/setaMobile.png";
import fotoCarro from "../assets/imagens/audi1.png"


const Estoque = () => {
  return (
    <div className="fundo">
      <HeaderProduct />
      <section>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
        <img
          src={setaMobile}
          alt="Seta-Mobile"
          class="seta-mobile"
        />
        <div class="aba-informações-carros">
          <div class="informações-carro">
            <div class="primeira-linha">
              <p class="nome-carro-informacoes">Audi A3</p>
              <p class="versão-carro">2.8 16V TURBO DIESEL LS CD 4X4 MANUAL</p>
              <div class="cambio">
                <p class="texto-bold">Câmbio</p>
                <p></p>
              </div>
              <div class="Ano">
                <p class="texto-bold">Ano</p>
                <p></p>
              </div>
              <div class="Km">
                <p class="texto-bold">KM</p>
                <p></p>
              </div>
              <div class="Cor">
                <p class="texto-bold">Cor</p>
                <p></p>
              </div>
              <div class="Troca">
                <p class="texto-bold">Aceita troca?</p>
                <p></p>
              </div>
              <div class="Dono">
                <p class="texto-bold">Único dono</p>
                <p></p>
              </div>
            </div>
            <div class="segunda-linha">
              <p class="Opcional">Opcionais</p>
              <div class="itens-opcionais">
                <div class="itens-opcionais-primeira-coluna"></div>
                <div class="itens-opcionais-segunda-coluna"></div>
                <div class="itens-opcionais-terceiro-coluna"></div>
                <div class="itens-opcionais-quarta-coluna"></div>
              </div>
            </div>
            <div class="terceira-linha">
              <p class="Garantia">Garantia e pericia</p>
              <p class="garantia-fabrica"></p>
            </div>
            <div class="quarta-linha">
              <p class="informações">Informações</p>
              <p class="informações-texto"></p>
            </div>
          </div>
          <div class="informações-carro-2">
            <p class="informações-preco-carro">R$ 130.000,00</p>
            <div class="fundo-whatsapp">
              <img
                src={whatsApp}
                alt="whatsapp"
                class="img-whatsapp"
              />
              <p class="texto-enviar-mensagem">Enviar mensagem</p>
            </div>
            <div class="telefone-informações">
              <img src={telefoneBranco} alt="telefone"/>
              <p class="telefone-texto">(13) 3327-8001</p>
            </div>
            <div class="localizacao">
              <img src={localizacaoMapa} alt="marcacao"/>
              <p class="texto-localizacao">Onde estamos?</p>
            </div>
            <p class="veiculo-loja">Este veiculo esta na loja</p>
            <div class="endereco">
              <img src={localizacaoMapa} alt="marcacao"/>
              <p class="predio">Doin Motors - Shopping The Blue</p>
            </div>
            <div class="fundo-avalie-carro">
              <img
                src={sifrao}
                alt="simbolo-dinheiro"
                class="img-dinheiro"
              />
              <p class="texto-avalie-carro">Avalie seu carro</p>
            </div>
          </div>
          <div class="estoque-carros">
            <div class="carros-anunciados">
              <img
                src={fotoCarro}
                alt=""
                class="foto-carro-class"
              />
              <div class="descricao-carro">
                <p class="nome-carro">Audi A3</p>
                <p class="modelo-carro">2.0 Manual</p>
                <p class="preco-carro">R$ 130.000,00</p>
                <p class="ano-carro">2017/2018</p>
                <p class="km-carro">50.000 km</p>
                <div class="borda-ver-mais">
                  <p class="ver-mais">VER MAIS</p>
                </div>
              </div>
            </div>
            <div class="carros-anunciados">
            <img
                src={fotoCarro}
                alt=""
                class="foto-carro-class"
              />
              <div class="descricao-carro">
                <p class="nome-carro">Audi A3</p>
                <p class="modelo-carro">2.0 Manual</p>
                <p class="preco-carro">R$ 130.000,00</p>
                <p class="ano-carro">2017/2018</p>
                <p class="km-carro">50.000 km</p>
                <div class="borda-ver-mais">
                  <p class="ver-mais">VER MAIS</p>
                </div>
              </div>
            </div>
            <div class="carros-anunciados">
            <img
                src={fotoCarro}
                alt=""
                class="foto-carro-class"
              />
              <div class="descricao-carro">
                <p class="nome-carro">Audi A3</p>
                <p class="modelo-carro">2.0 Manual</p>
                <p class="preco-carro">R$ 130.000,00</p>
                <p class="ano-carro">2017/2018</p>
                <p class="km-carro">50.000 km</p>
                <div class="borda-ver-mais">
                  <p class="ver-mais">VER MAIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
      </section>
      <Footer /> {}
    </div>
  );
};

export default Estoque;
