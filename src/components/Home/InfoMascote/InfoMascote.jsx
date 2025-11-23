import React from "react";
import estilos from "./InfoMascote.module.css";
import { FaUsers, FaDollarSign, FaCogs, FaHeadset } from "react-icons/fa";
import iconeBotaoGeny from "../../../assets/img/icone-geny-botao.png";
import mascoteGeny from "../../../assets/img/mascote-geny.png";
import retanguloTransicao from "../../../assets/img/rectangle-transition.png";
import { Link } from "react-router-dom";

const InfoMascote = () => {
  return (
    <>
      <section className={estilos.secaoInformacao}>
        <div className={estilos.containerInfo}>
          <div className={estilos.gradeCards}>
            {/* card 1: Sobre nós */}
            <article className={estilos.cartao}>
              <FaUsers size={40} className={estilos.icone} />
              <h3>Sobre nós</h3>
              <p>
                Descubra quem somos, o que nos motiva e o que visamos para o
                futuro
              </p>
              <Link to="/sobre-nos">Saber mais</Link>
            </article>

            {/* card 2: Planos */}
            <article className={estilos.cartao}>
              <FaDollarSign size={40} className={estilos.icone} />
              <h3>Planos</h3>
              <p>
                Descubra o plano ideal para suas necessidades. Escolha o que
                melhor se adapta a você.
              </p>
              <Link to="/planos">Saber mais</Link>
            </article>

            {/* card 3: Suporte */}
            <article className={estilos.cartao}>
              <FaCogs size={40} className={estilos.icone} />
              <h3>Suporte</h3>
              <p>
                Precisa de ajuda? Conte com a nossa equipe especializada para te
                dar o suporte que você precisa.
              </p>
              <Link to="/suporte">Saber mais</Link>
            </article>
          </div>
        </div>
      </section>
      <img src={retanguloTransicao} />
      <section className={estilos.secaoMascote}>
        <div className={estilos.containerMascote}>
          <div className={estilos.colunaTexto}>
            <h2>
              Conheça a <strong>GENY</strong>, nossa mascote cão guia!
            </h2>
            <p>
              Criada para facilitar sua interação com nossa plataforma, a Geny
              te guia de forma simples e inteligente por cada etapa, desde
              conhecer os recursos do EyeGen até realizar sua compra com
              segurança e praticidade.
            </p>
            <p>
              Ela cria registros, oferece informações, compartilha dicas de uso
              e cuidados, e garante que sua jornada seja leve, acessível e
              acolhedora.
            </p>
            <a href="#" className={estilos.botaoMascote}>
              <span>Conversar com a GENY</span>
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
              alt="Mascote GENY, um cachorro com óculos e colete"
              className={estilos.imagemMascote}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoMascote;
