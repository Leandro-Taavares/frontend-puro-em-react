import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/imagens/logoDoinPadrao.png";
import logoPreto from "../assets/imagens/logoDoinPreto.png";

const Header = () => {
  const location = useLocation();

  const [menuAberto, setMenuAberto] = useState(false);

  const abrirEFecharModal = () => {
    setMenuAberto((prevMenuAberto) => !prevMenuAberto);
    document.body.classList.toggle("no-scroll");
  };
  return (
    <header className={location.pathname === "/" ? "header" : "header white"}>
      <div className="Logo hide sm:show">
            <Link href="/" title="Doin">
                <img className="logo-tamanho" src={logo} alt="Doin Motors" />
            </Link>
        </div>
      <div
        className="header_menu"
        onClick={abrirEFecharModal}
      >
        <div className={`barra_cabecalho_1 ${menuAberto ? "ativo" : ""}`}></div>
        <div className={`barra_cabecalho_2 ${menuAberto ? "ativo" : ""}`}></div>
        <div className={`barra_cabecalho_3 ${menuAberto ? "ativo" : ""}`}></div>
        <p className="menu_texto">{menuAberto ? "FECHAR" : "MENU"}</p>
      </div>
      <div className="Logo sm:hide">
        <Link to="/" title="Doin">
          {location.pathname === "/" ? (
            <img className="logo-tamanho" src={logo} alt="Doin Motors" />
          ) : (
            <img className="logo-tamanho" src={logoPreto} alt="Doin Motors" />
          )}
        </Link>
      </div>
      <Link
        to="/ProductPage"
        title="NOSSO ESTOQUE"
        className="nosso_estoque_header"
      >
        NOSSO ESTOQUE
      </Link>
      <div className="borda_header"></div>
      {menuAberto && (
        <>
          <div
            className={`overlay ${menuAberto ? "menu_aberto__ativo" : ""}`}
            onClick={abrirEFecharModal}
          ></div>
          <div
            className={`header_menu_aberto ${menuAberto ? "menu_aberto__ativo" : ""}`}
          >
            <Link
              className="texto_menu_aberto"
              to="/ProductPage"
              title="NOSSO ESTOQUE"
            >
              NOSSO ESTOQUE
            </Link>
            <Link
              className="texto_menu_aberto"
              to="/ContatoPage"
              title="CONTATO"
            >
              CONTATO
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;  
