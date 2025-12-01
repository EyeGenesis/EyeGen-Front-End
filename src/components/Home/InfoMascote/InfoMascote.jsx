import React from "react";
import estilos from "./InfoMascote.module.css";
import { FaUsers, FaDollarSign, FaCogs } from "react-icons/fa";
import iconeBotaoGeny from "../../../assets/img/icone-geny-botao.png";
import mascoteGeny from "../../../assets/img/mascote-geny.png";
import retanguloTransicao from "../../../assets/img/rectangle-transition.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexto/ContextoLingua";

const InfoMascote = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className={estilos.secaoInformacao}>
        <div className={estilos.containerInfo}>
          <div className={estilos.gradeCards}>
            {/* card 1: Sobre nós */}
            <article className={estilos.cartao}>
              <FaUsers size={40} className={estilos.icone} />
              <h3>{t.home.infoMascote.cards.sobre.titulo}</h3>
              <p>{t.home.infoMascote.cards.sobre.texto}</p>
              <Link to="/sobre-nos">{t.home.infoMascote.cards.sobre.link}</Link>
            </article>

            {/* card 2: Planos */}
            <article className={estilos.cartao}>
              <FaDollarSign size={40} className={estilos.icone} />
              <h3>{t.home.infoMascote.cards.planos.titulo}</h3>
              <p>{t.home.infoMascote.cards.planos.texto}</p>
              <Link to="/planos">{t.home.infoMascote.cards.planos.link}</Link>
            </article>

            {/* card 3: Suporte */}
            <article className={estilos.cartao}>
              <FaCogs size={40} className={estilos.icone} />
              <h3>{t.home.infoMascote.cards.suporte.titulo}</h3>
              <p>{t.home.infoMascote.cards.suporte.texto}</p>
              <Link to="/suporte">{t.home.infoMascote.cards.suporte.link}</Link>
            </article>
          </div>
        </div>
      </section>
      <img src={retanguloTransicao} alt="" />
      <section className={estilos.secaoMascote}>
        <div className={estilos.containerMascote}>
          <div className={estilos.colunaTexto}>
            <h2>
              {/* O título tem uma parte em negrito, ajustei para pegar a string toda, 
                  mas se quiser manter o estilo, pode dividir no arquivo de tradução ou usar replace */}
              {t.home.infoMascote.mascote.titulo} 
            </h2>
            <p>{t.home.infoMascote.mascote.p1}</p>
            <p>{t.home.infoMascote.mascote.p2}</p>
            <a href="#" className={estilos.botaoMascote}>
              <span>{t.home.infoMascote.mascote.botao}</span>
              <img
                src={iconeBotaoGeny}
                alt="Ícone da GENY"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className={estilos.colunaImagem}>
            <div className={estilos.circuloFundo}></div>
            <img
              src={mascoteGeny}
              alt="Mascote GENY"
              className={estilos.imagemMascote}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoMascote;