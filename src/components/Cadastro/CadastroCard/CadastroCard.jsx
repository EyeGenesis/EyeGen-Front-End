// src/components/Cadastro/CadastroCard/CadastroCard.jsx
import { useState } from 'react';
import styles from './CadastroCard.module.css';
import iconUser from './../../../assets/img/user.svg';
import iconEmail from './../../../assets/img/email.svg';
import iconLock from './../../../assets/img/cadeado.svg';
import Imagem from './../../../assets/img/MulherCega2.png';
import Seta_Voltar from './../../../assets/img/SetaVoltar.svg';
import LogoEyegen from './../../../assets/img/eyegen.svg';
import { useLanguage } from "../../../contexto/ContextoLingua"; 
import Informacoes from "./../../../assets/Informalçoes_adicionais.png"
import Dados from "./../../../assets/Dados_Cadastrais.png"
import { useNavigate } from "react-router-dom";


export default function CadastroCard() {
  const { t } = useLanguage(); 

  const Navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");

  function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleCadastro() {
    setErro("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro(t.cadastro.mensagens.erroCampos);
      return;
    }

    if (!validarEmail(email)) {
      setErro(t.cadastro.mensagens.erroEmail);
      return;
    }

    if (senha !== confirmarSenha) {
      setErro(t.cadastro.mensagens.erroSenha);
      return;
    }

    alert(t.cadastro.mensagens.sucesso);
    Navigate("/cadastro-fase");
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>


        <div className={styles.colEsquerda}>


          <div className={styles.logoArea}>
            <img src={LogoEyegen} className={styles.logo} alt="Logo EyeGen" />
            <span className={styles.logoTexto}>EYEGEN</span>
          </div>
        

          <p className={styles.subTexto}>
            {t.cadastro.subtexto} <a href="">{t.cadastro.linkComecaAqui}</a>
          </p>

        <div className={styles.wrapper}>
              <div className={styles.dados}>
                <img src={Dados} alt="dados" />

                <div className={styles.bar}></div>

              <img src={Informacoes}/>

              </div>

              <div className={styles.texto}> 
                <p>Dados Cadastrais</p>
                <p>Informações Adicionais</p>

              </div>
        </div>

          <div className={styles.tabs}>
              <button  onClick={() => Navigate("/login")} className={styles.tab}>{t.cadastro.tabs.entrar}</button>
              <button className={`${styles.tab} ${styles.active}`}>{t.cadastro.tabs.cadastrar} <a href=""></a></button>
            </div>

          <div className={styles.inputsArea}>


            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder={t.cadastro.inputs.nomePlaceholder}
                className={styles.input}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconUser} alt="" />
              </div>
            </div>


            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder={t.cadastro.inputs.emailPlaceholder}
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconEmail} alt="" />
              </div>
            </div>


            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder={t.cadastro.inputs.senhaPlaceholder}
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconLock} alt="" />
              </div>
            </div>


            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder={t.cadastro.inputs.confirmarSenhaPlaceholder}
                className={styles.input}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <div className={styles.icon}>
                <img src={iconLock} alt="" />
              </div>
            </div>
          </div>


          {erro && <p className={styles.erro}>{erro}</p>}


          <button className={styles.botaoCadastro} onClick={handleCadastro}>
            {t.cadastro.botaoContinuar}
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
    </div>
  );
}