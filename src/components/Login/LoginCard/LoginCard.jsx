import { useState } from "react";
import styles from './LoginCard.module.css';
import Imagem from './../../../assets/img/MulherCega.png';
import Seta_Voltar from './../../../assets/img/SetaVoltar.svg';

export default function LoginCard() {

  const [emailUser, setEmailUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    setErro(""); // limpa erro ao tentar

    if (!emailUser.trim()) {
      setErro("Por favor, insira seu usuário ou e-mail.");
      return;
    }

    if (!senha.trim()) {
      setErro("Por favor, insira sua senha.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha precisa ter ao menos 6 caracteres.");
      return;
    }

    // Se passou por tudo → login válido
    alert("Login realizado com sucesso! (funcionamento simulado)");
  }

  return (
    <div className={styles.card}>

      {/* COLUNA ESQUERDA */}
      <div className={styles.colEsquerda}>

        {/* LOGO */}
        <div className={styles.logoArea}>
          <img
            src="./../../../src/assets/img/eyegen.svg"
            alt="Logo Eyegen"
            className={styles.logo}
          />
          <span className={styles.logoTexto}>EYEGEN</span>
        </div>

        {/* TÍTULO */}
        <div className={styles.bemVindo}>
          <h2>Seja-bem vindo(a) de volta!</h2>
        </div>

        {/* ABAS */}
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>Entrar</button>
          <button className={styles.tab}>Cadastre-se</button>
        </div>

        {/* INPUTS */}
        <div className={styles.inputsArea}>

          {/* EMAIL/USUÁRIO */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Insira seu usuário ou e-mail"
              className={styles.input}
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
            />
            <span className={styles.icon}>
              <img src="./../../../src/assets/img/user.svg" alt="" />
            </span>
          </div>

          {/* SENHA */}
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Insira sua senha"
              className={styles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className={styles.icon}>
              <img src="./../../../src/assets/img/cadeado.svg" alt="" />
            </span>
          </div>

          {/* MENSAGEM DE ERRO */}
          {erro && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>
              {erro}
            </p>
          )}

        </div>

        {/* BOTÃO ENTRAR */}
        <button
          className={styles.botaoEntrar}
          onClick={handleLogin}
        >
          Entrar
        </button>

        {/* DIVISOR */}
        <div className={styles.divisor}>
          <span><strong>Entrar</strong> com outros</span>
        </div>

        {/* BOTÕES SOCIAIS */}
        <button className={styles.botaoSocial}>
          <img src="./../../../src/assets/img/google.svg" alt="Google" />
          <span>Entrar com <strong>Google</strong></span>
        </button>

        <button className={`${styles.botaoSocial} ${styles.apple}`}>
          <img src="./../../../src/assets/img/apple.svg" alt="Apple" />
          <span>Entrar com <strong>Apple</strong></span>
        </button>

        <button className={`${styles.botaoSocial} ${styles.facebook}`}>
          <img src="./../../../src/assets/img/facebook.svg" alt="Facebook" />
          <span>Entrar com <strong>Facebook</strong></span>
        </button>

      </div>

      {/* COLUNA DIREITA – IMAGEM */}
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