import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/reset.css';
import '../styles/aba-filtro.css';
import '../styles/aba-estoque.css';
import '../styles/header-estoque.css';
import '../styles/rodape-estoque.css';

const ProductPages = () => {
  return (
    <div className="estoque-page">
      <Header /> {}
      <section className="section">
        <div className="aba-filtro">
          {}
        </div>
        <div className="aba-estoque">
          <div className="home-estoque">
            <p>Home - Nosso estoque</p>
          </div>
          <div className="filtro-mobile">
            <img src="imagens-site/filtrar-mobile.png" alt="icone-filtro" className="filtrar-img-mobile" />
          </div>
          <div className="estoque-carros">
            {}
          </div>
        </div>
      </section>
      <Footer /> {}
    </div>
  );
};

export default ProductPages;