import { useState } from "react";
import style from "./Header.module.css";
import logo from "../../assets/img/nav/logo.ico";
import perfilGeny from "../../assets/img/nav/perfil_geny.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [ouvindo, setOuvindo] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

  return (
    <header>
      <nav className={style.nav}>
        <div className={style.nav_esquerda}>
          <img
            className={style.logo}
            src={logo}
            alt="logo do eyegen, uma oculos junto com uma borboleta"
          />
          <Link to="/">Início</Link>
          <Link to="/sobre-nos">Sobre nós</Link>
          <Link to="/suporte">Suporte</Link>

          <a href="#" className={style.botao_geny}>
            <div className={style.perfil_geny}></div>
            <span>GENY</span>
          </a>
        </div>

        <div className={style.nav_direita}>
          <a href="#"> &#127760; PT-BR</a>
          <Link to="/comprar">Comprar</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/login">Entrar</Link>

          <button className={style.cadastrar}>
            <Link to="/cadastre-se">Cadastre-se</Link>
          </button>
        </div>

        <button className={style.menu_hamburger} onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>

      <div
        className={`${style.menu_mobile_overlay} ${
          menuAberto ? style.ativo : ""
        }`}
      >
        <div className={style.menu_mobile_header}>
          <img className={style.logo_mobile} src={logo} alt="logo eyegen" />
          <button className={style.botao_fechar} onClick={toggleMenu}>
            &times;
          </button>
        </div>

        <div className={style.menu_mobile_botoes_topo}>
          <button className={style.cadastrar_mobile}>
            <a href="#">Cadastre-se</a>
          </button>
          <a href="#" className={style.entrar_mobile}>
            Entrar
          </a>
        </div>

        <div className={style.menu_mobile_links}>
          <a href="#" onClick={toggleMenu}>
            Início
          </a>
          <a href="#" onClick={toggleMenu}>
            Sobre Nós
          </a>
          <a href="#" onClick={toggleMenu}>
            Comprar
          </a>
          <a href="#" onClick={toggleMenu}>
            Suporte
          </a>
          <a href="#" onClick={toggleMenu}>
            Planos
          </a>
          <a href="#" className={style.botao_geny_mobile}>
            <img src={perfilGeny} alt="Perfil Geny" />
            <span>GENY</span>
          </a>
        </div>
      </div>
    </header>
  );
}
