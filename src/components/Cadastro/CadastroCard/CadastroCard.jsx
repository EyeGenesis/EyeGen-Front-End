import { useState } from 'react';
import styles from './CadastroCard.module.css';
import iconUser from './../../../assets/img/user.svg';
import iconEmail from './../../../assets/img/email.svg';
import iconLock from './../../../assets/img/cadeado.svg';
import Imagem from './../../../assets/img/MulherCega2.png';
import Seta_Voltar from './../../../assets/img/SetaVoltar.svg';

export default function CadastroCard() {

  // Estados dos inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Estado de erro
  const [erro, setErro] = useState("");

  function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleCadastro() {
    setErro("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Insira um e-mail válido.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* COLUNA ESQUERDA */}
        <div className={styles.colEsquerda}>

          {/* LOGO */}
          <div className={styles.logoArea}>
            <img src="./../../../src/assets/img/eyegen2.svg" className={styles.logo} />
            <span className={styles.logoTexto}>EYEGEN</span>
          </div>

          {/* FRASE */}
          <p className={styles.subTexto}>
            A tecnologia a favor da sua liberdade <a href="#">começa aqui.</a>
          </p>

          {/* ABAS */}
          <div className={styles.tabs}>
            <button className={styles.tab}>Entrar</button>
            <button className={`${styles.tab} ${styles.active}`}>Cadastre-se</button>
          </div>

          {/* INPUTS */}
          <div className={styles.inputsArea}>

            {/* Nome */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Insira seu nome"
                className={styles.input}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconUser} />
              </div>
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconEmail} />
              </div>
            </div>

            {/* Senha */}
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Insira sua senha"
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconLock} />
              </div>
            </div>

            {/* Confirmar senha */}
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Confirme sua senha"
                className={styles.input}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconLock} />
              </div>
            </div>
          </div>

          {/* MENSAGEM DE ERRO */}
          {erro && <p className={styles.erro}>{erro}</p>}

          {/* BOTÃO CADASTRAR */}
          <button className={styles.botaoCadastro} onClick={handleCadastro}>
            Cadastrar-se
          </button>
        </div>

        {/* COLUNA DIREITA */}
        <div className={styles.colDireita}>
            <img src={Imagem} className={styles.imagemDireita} alt="Imagem de uma pessoa cega" />
        </div>

        <div className={styles.botaoVoltar}>
          <button onClick={() => window.history.back()}>
            <img src={Seta_Voltar} alt="Voltar" />
          </button>
        </div>

      </div>
    </div>
  );
}
