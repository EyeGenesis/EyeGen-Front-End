import { useState } from "react";
import style from "./Header.module.css";
import logo from "../../assets/img/nav/logo.ico";
import perfilGeny from "../../assets/img/nav/perfil_geny.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexto/ContextoLingua";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [ouvindo, setOuvindo] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  }

  const { t, toggleLanguage, language } = useLanguage();

  const comandosDeVoz = [
    { 
      palavras: ["início", "home", "inicial", "começo"], 
      id: "btn-inicio-nav", 
      acao: "Início" 
    },
    { 
      palavras: ["sobre", "quem somos", "empresa", "conhecer"], 
      id: "btn-sobre-nav", 
      acao: "Sobre Nós" 
    },
    { 
      palavras: ["suporte", "ajuda", "contato", "falar com"], 
      id: "btn-suporte-nav", 
      acao: "Suporte" 
    },
    { 
      palavras: ["comprar", "compra", "adquirir", "loja"], 
      id: "btn-comprar-nav", 
      acao: "Comprar" 
    },
    { 
      palavras: ["planos", "preço", "valor", "assinatura"], 
      id: "btn-planos-nav", 
      acao: "Planos" 
    },
    { 
      palavras: ["entrar", "login", "logar", "acesso"], 
      id: "btn-entrar-nav", 
      acao: "Login" 
    },
    { 
      palavras: ["cadastre-se", "cadastro", "criar conta", "registrar"], 
      id: "btn-cadastrar-nav", 
      acao: "Cadastro" 
    }
  ];

  const ativarComandoVoz = (e) => {
    e.preventDefault();

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Seu navegador não suporta comandos de voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setOuvindo(true);
      console.log("Ouvindo...");
    };

    recognition.onend = () => {
      setOuvindo(false);
      console.log("Parou de ouvir.");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Você disse: ", transcript);

      const comandoEncontrado = comandosDeVoz.find(cmd => 
        cmd.palavras.some(palavra => transcript.includes(palavra))
      );


      if (comandoEncontrado) {
        const elementoAlvo = document.getElementById(comandoEncontrado.id);
        
        if (elementoAlvo) {
          console.log(`Geny entendeu: "${transcript}". Indo para ${comandoEncontrado.acao}!`);
          elementoAlvo.click();
          fecharMenu();
        } else {
          console.warn(`Elemento com ID ${comandoEncontrado.id} não encontrado na tela.`);
        }
      } else {
        console.log(`Geny ouviu: "${transcript}", mas não reconheceu o comando.`);
      }
    };

    recognition.start();
  };

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

          <Link to="/" id="btn-inicio-nav">{t.header.inicio}</Link>
          <Link to="/sobre-nos" id="btn-sobre-nav">{t.header.sobre}</Link>
          <Link to="/suporte" id="btn-suporte-nav">{t.header.suporte}</Link>

          <a href="#" 
            className={style.botao_geny}
            onClick={ativarComandoVoz}
            style={{ border: ouvindo ? '2px solid #ff0000' : '1px solid #fff' }}
            title="Clique para falar com a Geny"
          >
            <div className={style.perfil_geny}></div>

            <span>{ouvindo ? "OUVINDO..." : "GENY"}</span>
          </a>
        </div>

        <div className={style.nav_direita}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleLanguage(); }}> 
             &#127760; {language === 'pt' ? 'PT-BR' : 'EN-US'}
          </a>
          <Link to="/comprar" id="btn-comprar-nav">{t.header.comprar}</Link>
          <Link to="/planos" id="btn-planos-nav">{t.header.planos}</Link>
          <Link to="/login" id="btn-entrar-nav">{t.header.entrar}</Link>

          <button className={style.cadastrar}>
            <Link to="/cadastre-se" id="btn-cadastrar-nav">{t.header.cadastrar}</Link>
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
            <Link to="/cadastre-se" onClick={fecharMenu}>{t.header.cadastrar}</Link>
          </button>
            <Link to="/login" className={style.entrar_mobile} onClick={fecharMenu}>{t.header.entrar}</Link>
        </div>

        <div className={style.menu_mobile_links}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleLanguage(); }}> 
             &#127760; {language === 'pt' ? 'PT-BR' : 'EN-US'}
          </a>
          <Link to="/" onClick={fecharMenu}>{t.header.inicio}</Link>
          <Link to="/sobre-nos" onClick={fecharMenu}>{t.header.sobre}</Link>
          <Link to="/comprar" onClick={fecharMenu}>{t.header.comprar}</Link>
          <Link to="/suporte" onClick={fecharMenu}>{t.header.suporte}</Link>
          <Link to="/planos" onClick={fecharMenu}>{t.header.planos}</Link>
          

          <a href="#" className={style.botao_geny_mobile} onClick={ativarComandoVoz}>
            <img src={perfilGeny} alt="Perfil Geny" />
            <span>{ouvindo ? "..." : "GENY"}</span>
          </a>
        </div>
      </div>
    </header>
  );
}