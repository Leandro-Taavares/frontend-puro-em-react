import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderProduct from '../components/HeaderProduct'; 
import Footer from '../components/Footer'; 
// CSS // 
import '../styles/reset.css';
import '../styles/aba-filtro.css';
import '../styles/aba-estoque.css';
import '../styles/header-estoque.css'
import '../styles/rodape-estoque.css';
import DataJson from '../Data/data.json'

//Logos Filtro//
import LogoBmw from '../assets/imagens/image11.png' //src={logo}//
import LogoAudi from '../assets/imagens/image12.png'
import LogoMercedes from '../assets/imagens/image13.png'
import LogoJeep from '../assets/imagens/image14.png'
//

const ProductPages = () => {

    const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get('DataJson')
      .then(response => {
        console.log(response.data)
        setCarros(response.data.resultado);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados', error);
      });
  }, []);
    
  return (
    <div className="estoque-page">
      <HeaderProduct /> 
      <section className="section">
        <div className="aba-filtro">
        <div className="marca-carros">
                <p className="texto-marca-carros">Marca de carro</p>
                <div className="fechar-filtro">
                    <p className="fechar-filtro-mobile-x"></p>
                    <p className="fechar-filtro-mobile-x-2"></p>
                </div>
            </div>
            <div className="logo-marcas">
                <div className="marca marca-1">
                    <img alt="iconeMarca" src={LogoBmw} className="logo-bmw1"/>
                    <p className="texto-bmw1">BMW</p>
                </div>
                <div className="marca marca-padding marca-2">
                    <img alt="iconeMarca" src={LogoAudi} className="logo-audi1"/>
                    <p className="texto-audi1">AUDI</p>
                </div>
                <div className="marca marca-padding marca-3">
                    <img alt="iconeMarca" src={LogoMercedes} className="logo-mercedes1"/>
                    <p className="texto-mercedes1">MERCEDES</p>
                </div>
                <div className="marca marca-padding marca-4">
                    <img alt="iconeMarca" src={LogoJeep} className="logo-jeep1"/>
                    <p className="texto-jeep1">JEEP</p>
                </div>
                <div className="marca marca-padding marca-margin marca-5">
                    <img alt="iconeMarca" src={LogoBmw} className="logo-bmw2"/>
                    <p className="texto-bmw2">BMW</p>
                </div>
                <div className="marca marca-padding marca-margin marca-6">
                    <img alt="iconeMarca" src={LogoAudi} className="logo-audi2"/>
                    <p className="texto-audi2">AUDI</p>
                </div>
                <div className="marca marca-padding marca-margin marca-7">
                    <img alt="iconeMarca" src={LogoMercedes} className="logo-mercedes2"/>
                    <p className="texto-mercedes2">MERCEDES</p>
                </div>
                <div className="marca marca-padding marca-margin marca-8">
                    <img src={LogoJeep} alt='iconeMarca' className="logo-jeep2"/>
                    <p className="texto-jeep2">JEEP</p>
                </div>
            </div>
            <div className="border"></div>
            <div className="segunda-aba">
                <p className="filtro-tipo">Tipo</p>
                <div className="filtros-usados-novos">
                    <div className="filtro-novos">
                        <input type="checkbox" name="Novos" id="novos" className="checkboxs"/>
                        <label for="novos" className="usados-novos-texto">Novos</label>
                    </div>
                    <div className="filtro-usados">
                        <input type="checkbox" name="Usados" id="usados" className="checkboxs"/>
                        <label for="usados" className="usados-novos-texto">Usados</label>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="terceira-aba">
                <p className="filtro-ano">Ano</p>
                <input type="text" name="de" id="de" className="filtro-de" placeholder="de"/>
                <input type="text" name="ate" id="ate" className="filtro-ate" placeholder="até"/>
                <p className="exemplo-esq">ex: 2014</p>
                <p className="exemplo-dir">ex: 2019</p>
            </div>
            <div className="border"></div>
            <div className="quarta-aba">
                <p className="filtro-preco">Preço</p>
                <input type="text" name="de" id="de1" className="filtro-de" placeholder="de"/>
                <input type="text" name="ate" id="ate1" className="filtro-ate" placeholder="até"/>
                <p className="exemplo-esq">ex: 10.000</p>
                <p className="exemplo-dir">ex: 20.000</p>
            </div>
            <div className="border"></div>
            <div className="quinta-aba">
                <p className="filtro-quilometragem">Quilometragem</p>
                <input type="text" name="de" id="de2" className="filtro-de" placeholder="de"/>
                <input type="text" name="ate" id="ate2" className="filtro-ate" placeholder="até"/>
                <p className="exemplo-esq">ex: 5.000</p>
                <p className="exemplo-dir">ex: 15.000</p>
            </div>
            <div className="border"></div>
            <div className="sexta-aba">
                <p className="filtro-combustivel">Combustivel</p>
                <div className="filtros-usados-novos">
                    <div className="filtro-alcool">
                        <input type="checkbox" name="alcool" id="alcool" className="checkboxs"/>
                        <label for="alcool" className="usados-novos-texto">Alcool</label>
                    </div>
                    <div className="filtro-diesel">
                        <input type="checkbox" name="diesel" id="diesel" className="checkboxs"/>
                        <label for="diesel" className="usados-novos-texto">Diesel</label>
                    </div>
                    <div className="filtro-eletrico">
                        <input type="checkbox" name="eletrico" id="eletrico" className="checkboxs"/>
                        <label for="eletrico" className="usados-novos-texto">Eletrico</label>
                    </div>
                    <div className="filtro-gasolina">
                        <input type="checkbox" name="gasolina" id="gasolina" className="checkboxs"/>
                        <label for="gasolina" className="usados-novos-texto">Gasolina</label>
                    </div>
                    <div className="filtro-hibrido">
                        <input type="checkbox" name="hibrido" id="hibrido" className="checkboxs"/>
                        <label for="hibrido" className="usados-novos-texto">Hibrido</label>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </div>
        <div className="aba-estoque">
          <div className="home-estoque">
            <p>Home - Nosso estoque</p>
          </div>
          <div className="filtro-mobile">
            <img src="imagens-site/filtrar-mobile.png" alt="icone-filtro" className="filtrar-img-mobile" />
          </div>
          <div className="estoque-carros">
          {carros.map(car => (
              <a key={car.id} href="/frontend-puro/pagina-estoque-detalhe/index.html">
                <div className="carros-anunciados">
                  <img src={car.imagem} alt="" className="foto-carro-class" />
                  <div className="descricao-carro">
                    <p className="nome-carro">{car.nome}</p>
                    <p className="modelo-carro">{car.transmissao}</p>
                    <p className="preco-carro">R$ {car.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p className="ano-carro">{car.ano}</p>
                    <p className="km-carro">{car.km.toLocaleString('pt-BR')} km</p>
                    <div className="borda-ver-mais">
                      <p className="ver-mais">VER MAIS</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductPages;
