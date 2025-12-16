import { useState } from "react";
import styles from "./CadastroCard_Fase.module.css";

import Imagem from "./../../../assets/img/MulherCega2.png";
import Seta_Voltar from "./../../../assets/img/SetaVoltar.svg";
import LogoEyegen from "./../../../assets/img/eyegen.svg";

import Dados from "./../../../assets/Dados_Cadastrais.png";
import Informacoes_add from "./../../../assets/Informalçoes_adicionais_add.png";

import iconTelefone from "./../../../assets/img/icon.svg";

import { useLanguage } from "../../../contexto/ContextoLingua";
import { useNavigate, useLocation } from "react-router-dom";
import { cadastrarUsuario } from "../../../services/cadastroService";

export default function CadastroCard() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [resposta, setResposta] = useState(null);
  const [tipo, setTipo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erro, setErro] = useState("");

  const location = useLocation();
  const dadosEtapa1 = location.state || {};

  const [loading, setLoading] = useState(false);

  const [diaNasc, setDiaNasc] = useState("");
  const [mesNasc, setMesNasc] = useState("");
  const [anoNasc, setAnoNasc] = useState("");

  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const anoAtual = new Date().getFullYear();
  const anos = Array.from({ length: 100 }, (_, i) => anoAtual - i);
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
    if (!diaNasc || !mesNasc || !anoNasc) {
      setErro("Informe sua data de nascimento completa.");
      return;
    }
    const dataFormatada = `${anoNasc}-${mesNasc
      .toString()
      .padStart(2, "0")}-${diaNasc.toString().padStart(2, "0")}`;

    const dataValida = new Date(dataFormatada);

    if (isNaN(dataValida.getTime())) {
      setErro("Data inválida.");
      return;
    }

    setLoading(true);

    let tipoDeficienciaEnum = "NAO_POSSUI_DEFICIENCIA";

    if (resposta === "sim") {
      if (tipo === "Cegueira Total") {
        tipoDeficienciaEnum = "CEGUEIRA_TOTAL";
      } else if (tipo === "Baixa Visão") {
        tipoDeficienciaEnum = "BAIXA_VISAO";
      }
    }

    const usuarioParaSalvar = {
      nome: dadosEtapa1.nome,
      email: dadosEtapa1.email,
      senha: dadosEtapa1.senha,
      telefone: telefone,
      deficienciaVisual: tipoDeficienciaEnum,
      dataNascimento: dataFormatada,
    };

     cadastrarUsuario(usuarioParaSalvar)
    .then(() => {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    })
    .catch((error) => {
  if (error.response) {
    // A requisição foi feita e a API respondeu com erro (4xx ou 5xx)
    const mensagem =
      error.response.data?.message ||
      error.response.data?.error ||
      "Erro retornado pelo servidor.";

    setErro(mensagem);
    console.error("Erro da API:", error.response);

  } else if (error.request) {
    // A requisição foi feita, mas não houve resposta
    setErro("Não foi possível se conectar ao servidor. Verifique sua internet.");
    console.error("Sem resposta do servidor:", error.request);

  } else {
    // Erro ao configurar a requisição
    setErro("Erro inesperado ao realizar a requisição.");
    console.error("Erro interno:", error.message);
  }
});
     
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

          <div className={styles.inputGroup}>
            <label className={styles.labelData}>Data de Nascimento</label>

            <div className={styles.containerData}>
              {/* SELECT DIA */}
              <select
                className={styles.selectData}
                value={diaNasc}
                onChange={(e) => setDiaNasc(e.target.value)}
              >
                <option value="" disabled>
                  Dia
                </option>
                {dias.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

             
              <select
                className={styles.selectData}
                value={mesNasc}
                onChange={(e) => setMesNasc(e.target.value)}
              >
                <option value="" disabled>
                  Mês
                </option>
                {meses.map((m, index) => (
                  
                  <option key={index} value={index + 1}>
                    {m}
                  </option>
                ))}
              </select>

          
              <select
                className={styles.selectData}
                value={anoNasc}
                onChange={(e) => setAnoNasc(e.target.value)}
              >
                <option value="" disabled>
                  Ano
                </option>
                {anos.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
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
