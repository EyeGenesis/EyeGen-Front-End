import { useState } from "react";
import styles from './LoginCard.module.css';
import Imagem from './../../../assets/img/MulherCega.png';
import Seta_Voltar from './../../../assets/img/SetaVoltar.svg';
import GoogleIcon from './../../../assets/img/google.svg';
import AppleIcon from './../../../assets/img/apple.svg';
import FacebookIcon from './../../../assets/img/facebook.svg';
import UserIcon from './../../../assets/img/user.svg';
import CadeadoIcon from './../../../assets/img/cadeado.svg';
import LogoEyegen from './../../../assets/img/eyegen.svg';
import { useLanguage } from "../../../contexto/ContextoLingua";

export default function LoginCard() {
  const { t } = useLanguage(); 

  const [emailUser, setEmailUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    setErro(""); 

    if (!emailUser.trim()) {
      setErro(t.login.mensagens.erroUsuario);
      return;
    }

    if (!senha.trim()) {
      setErro(t.login.mensagens.erroSenha);
      return;
    }

    if (senha.length < 6) {
      setErro(t.login.mensagens.erroTamanhoSenha);
      return;
    }


    alert(t.login.mensagens.sucesso);
  }

  return (
    <div className={styles.card}>


      <div className={styles.colEsquerda}>

        <div className={styles.logoArea}>
          <img
            src={LogoEyegen}
            alt="Logo Eyegen"
            className={styles.logo}
          />
          <span className={styles.logoTexto}>EYEGEN</span>
        </div>


        <div className={styles.bemVindo}>
          <h2>{t.login.titulo}</h2>
        </div>


        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>{t.login.tabs.entrar}</button>
          <button className={styles.tab}>{t.login.tabs.cadastrar}</button>
        </div>


        <div className={styles.inputsArea}>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder={t.login.inputs.usuarioPlaceholder}
              className={styles.input}
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
            />
            <span className={styles.icon}>
              <img src={UserIcon} alt="" />
            </span>
          </div>


          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder={t.login.inputs.senhaPlaceholder}
              className={styles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className={styles.icon}>
              <img src={CadeadoIcon} alt="" />
            </span>
          </div>


          {erro && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>
              {erro}
            </p>
          )}

        </div>

        <button
          className={styles.botaoEntrar}
          onClick={handleLogin}
        >
          {t.login.botao}
        </button>


        <div className={styles.divisor}>
          {/* Para manter o estilo bold em "Entrar", usamos dangerouslySetInnerHTML ou separamos no JSON. 
              Aqui vou simplificar exibindo o texto traduzido. 
              Se quiser manter o "Entrar" em negrito, você pode quebrar a string no JSON. */}
          <span>{t.login.divisor}</span>
        </div>

        <button className={styles.botaoSocial}>
          <img src={GoogleIcon} alt="Google" />
          <span>{t.login.social.google}</span>
        </button>

        <button className={`${styles.botaoSocial} ${styles.apple}`}>
          <img src={AppleIcon} alt="Apple" />
          <span>{t.login.social.apple}</span>
        </button>

        <button className={`${styles.botaoSocial} ${styles.facebook}`}>
          <img src={FacebookIcon} alt="Facebook" />
          <span>{t.login.social.facebook}</span>
        </button>

      </div>

      <div className={styles.colDireita}>
          <img src={Imagem} className={styles.imagemDireita} alt="Imagem de uma pessoa cega" />
      </div>

      <div className={styles.botaoVoltar}>
        <button onClick={() => window.history.back()}>
          <img src={Seta_Voltar} alt="Voltar" />
        </button>
      </div>

    </div>
  );
}