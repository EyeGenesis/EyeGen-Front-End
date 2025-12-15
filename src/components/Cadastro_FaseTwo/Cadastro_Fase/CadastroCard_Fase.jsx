import { useState } from "react";
import styles from "./CadastroCard_Fase.module.css";

import Imagem from "./../../../assets/img/MulherCega2.png";
import Seta_Voltar from "./../../../assets/img/SetaVoltar.svg";
import LogoEyegen from "./../../../assets/img/eyegen.svg";

import Dados from "./../../../assets/Dados_Cadastrais.png";
import Informacoes_add from "./../../../assets/Informalçoes_adicionais_add.png";

import iconTelefone from "./../../../assets/img/icon.svg";

import { useLanguage } from "../../../contexto/ContextoLingua";
import { useNavigate } from "react-router-dom";

export default function CadastroCard() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [resposta, setResposta] = useState(null);
  const [tipo, setTipo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erro, setErro] = useState("");


  const clicouSim = () => setResposta("sim");

  const clicouNao = () => {
    setResposta("nao");
    setTipo("");
  };

  function handleCadastro() {
    setErro("");

    if (!resposta) {
      setErro("Selecione uma opção (Sim/Não).");
      return;
    }

    if (resposta === "sim" && !tipo) {
      setErro("Selecione o tipo de deficiência visual.");
      return;
    }

    if (!telefone.trim()) {
      setErro("Telefone obrigatório.");
      return;
    }

    alert(t.cadastro.mensagens.sucesso);
    navigate("/");
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
              <img src={Informacoes_add} alt="informações adicionais" />
            </div>

            <div className={styles.texto}>
              <p>Dados Cadastrais</p>
              <p>Informações Adcionais</p>
            </div>
          </div>

          <div className={styles.tabs}>
            <button onClick={() => navigate("/login")} className={styles.tab}>
              {t.cadastro.tabs.entrar}
            </button>

            <button className={`${styles.tab} ${styles.active}`}>
              {t.cadastro.tabs.cadastrar}
            </button>
          </div>

          <div className={styles.inputGroup}>
            <p className={styles.palavra_chave}>
              Você Possui algum tipo de deficiência visual?
            </p>

            <div className={styles.opcoes}>
              <div
                className={`${styles.opcao} ${
                  resposta === "sim" ? styles.ativo : ""
                }`}
                onClick={clicouSim}
              >
                <span className={styles.quadrado} />
                <span>Sim possuo</span>
              </div>

              <div
                className={`${styles.opcao} ${
                  resposta === "nao" ? styles.ativo : ""
                }`}
                onClick={clicouNao}
              >
                <span className={styles.quadrado} />
                <span>Não possuo</span>
              </div>
            </div>

            {resposta === "sim" && (
              <details id="tipoDefVisual" className={styles.selectBox}>
                <summary className={styles.selectSummary}>
                  {tipo || "Selecione o tipo de deficiência visual"}
                  <span className={styles.arrow}></span>
                </summary>

                <div className={styles.options}>
                  {["Cegueira Total", "Baixa Visão"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`${styles.option} ${
                        tipo === item ? styles.optionAtiva : ""
                      }`}
                      onClick={() => {
                        setTipo(item);
                        const el = document.getElementById("tipoDefVisual");
                        if (el) el.open = false;
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
            )}
          </div>

          <div className={styles.inputGroupTelefone}>
            <input
              type="tel"
              placeholder="Insira seu telefone"
              className={styles.inputTelefone}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />

            <div className={styles.iconTelefone}>
              <img src={iconTelefone} alt="Telefone" />
            </div>
          </div>

          
          {erro && <p className={styles.erro}>{erro}</p>}

          <button
            type="button"
            className={styles.botaoCadastro}
            onClick={handleCadastro}
          >
            {t.cadastro.botao}
          </button>
        </div>

        <div className={styles.colDireita}>
          <img
            src={Imagem}
            className={styles.imagemDireita}
            alt="Imagem de uma pessoa cega"
          />
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
