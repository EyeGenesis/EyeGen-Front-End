// src/components/Footer/Footer.jsx
import style from './Footer.module.css';
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexto/ContextoLingua"; 

export default function Footer() {

    const { t } = useLanguage(); 

    return (

        <footer className={style.footer}>

            <h1>{t.footer.titulo}</h1>

            <div className={style.input_email}>
                <input 
                    type="email" 
                    placeholder={t.footer.inputPlaceholder} 
                    required 
                />

                <button type='submit'>
                    &rarr;
                </button>
            </div>
            
            <div className={style.links}>

                <ul type="none">
                    <h2>{t.footer.colunas.produtos}</h2>
                    <li><Link to="/comprar">{t.footer.links.eyeglass}</Link></li>
                    <li><Link to="/planos">{t.footer.links.planos}</Link></li>
                </ul>

               <ul type="none">
                    <h2>{t.footer.colunas.redes}</h2>
                    <li>
                        <a 
                            href="https://www.instagram.com/eyegenesis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            target='_blank' 
                            rel='external'
                        >
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/company/eyegen-org/" 
                            target='_blank' 
                            rel='external'
                        >
                            Linkedin
                        </a>
                    </li>
                </ul>


                <ul type="none">
                    <h2>{t.footer.colunas.duvidas}</h2>
                    <li><Link to="/suporte" id="btn-suporte-nav">{t.footer.links.suporte}</Link></li>
                </ul>

 
                <ul type="none">
                    <h2><a href="#">{t.footer.colunas.sobre}</a></h2>
                    <li><Link to="/sobre-nos" id="btn-sobre-nav">{t.footer.links.sobreNos}</Link></li>
                </ul>
            </div>
        </footer>
    )
}