import { useState } from 'react';
import style from './Header.module.css';
import logo from '../../assets/img/logo.ico';
import perfilGeny from '../../assets/img/perfil_geny.png';
import iconeIdioma from '../../assets/img/icone_idioma.png';
import iconeComprar from '../../assets/img/icone_comprar.png';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header>
            <nav className={style.nav}>
                <div className={style.nav_esquerda}>
                    <img className={style.logo} src={logo} alt="logo do eyegen, uma oculos junto com uma borboleta" />
                    <a href="#"> Inicio </a>
                    <a href="#"> Sobre nós</a>
                    <a href="#"> Suporte </a>
                    <a href="#" className={style.botao_geny}>
                        <div className={style.perfil_geny}></div>
                        <span>GENY</span>
                    </a>
                </div>

                <div className={style.nav_direita}>
                    <a href="#"> &#127760; PT-BR</a>
                    <a href="#"> &#128722; Comprar</a>
                    <a href="#">Planos</a>
                    <a href="#">Entrar</a>
                    <button className={style.cadastrar}>
                        <a href="#">Cadastre-se</a>
                    </button>
                </div>

                <button className={style.menu_hamburger} onClick={toggleMenu}>
                    &#9776; 
                </button>
            </nav>

            <div className={`${style.menu_mobile_overlay} ${menuAberto ? style.ativo : ''}`}>
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
                    <a href="#" className={style.entrar_mobile}>Entrar</a>
                </div>

                <div className={style.menu_mobile_links}>
                    <a href="#" onClick={toggleMenu}>Início</a>
                    <a href="#" onClick={toggleMenu}>Sobre Nós</a>
                    <a href="#" onClick={toggleMenu}>Comprar</a>
                    <a href="#" onClick={toggleMenu}>Suporte</a>
                    <a href="#" onClick={toggleMenu}>Planos</a>
                    <a href="#" className={style.botao_geny_mobile}>
                        {/* A imagem de perfil do Geny aqui. Usei o 'perfilGeny' importado */}
                        <img src={perfilGeny} alt="Perfil Geny" />
                        <span>GENY</span>
                    </a>
                </div>
            </div>
        </header>
    );
}