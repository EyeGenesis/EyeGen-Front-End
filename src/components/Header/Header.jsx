import style from './Header.module.css'
import logo from '../../assets/img/logo.ico' 
import perfilGeny from '../../assets/img/perfil_geny.png'
import iconeIdioma from '../../assets/img/icone_idioma.png'
import iconeComprar from '../../assets/img/icone_comprar.png'

export default function Header() {

    return (
        <header>
            <nav className={style.nav}>
                

                <div className={style.nav_esquerda}>
                    <img className={style.logo} src={logo} alt="logo do eyegen, uma oculos junto com uma borboleta" />
                    <a href="#" > Inicio </a>
                    <a href="#" > Sobre nós</a>
                    <a href="#" > Suporte </a>
                    <a href="#" className={style.botao_geny}>
                        <div className={style.perfil_geny}>
                        </div>
                        <span>GENY</span>
                    </a>
                </div>

                <div className={style.nav_direita}>
                    <a href="#"> <img src={iconeIdioma} alt="icone do menu de idiomas" /> PT-BR</a> 
                    <a href="#"> <img src={iconeComprar} alt="icone do link para aba de comprar" /> Comprar</a> 
                    <a href="#" >Planos</a>
                    <a href="#" >Entrar</a>
                    <button className={style.cadastrar}>
                        <a href="#">Cadastre-se</a>
                    </button>
                </div>
            </nav>
        </header>
    )
}