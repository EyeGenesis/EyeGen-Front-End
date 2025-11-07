import React from "react";
import estilos from "./NossoProduto.module.css";
import {
  FaArrowRight,
  FaPlus,
  FaCamera,
  FaBatteryHalf,
  FaShieldAlt,
} from "react-icons/fa";

const NossoProduto = () => {
  return (
    <section className={estilos.secaoProduto}>
      <div className={estilos.containerTitulo}>
        <h2>Sobre Nosso Produto</h2>
        <p>Tranforme seu dia a dia com autonomia e segurança</p>
        <a href="#" className={estilos.botaoComprar}>
          Comprar Agora <FaArrowRight size={14} />
        </a>
      </div>
      <div className={estilos.gradeCards}>
        <article className={`${estilos.cartao} ${estilos.cartaoGrande}`}>
          <div className={estilos.espacoVideo}></div>
          <div className={estilos.conteudoCartao}>
            <FaShieldAlt className={estilos.icone} size={24} />
            <h3>Design Confortável</h3>
            <p>Texto descritivo sobre o design.</p>
            <footer>
              <a href="#" className={estilos.linkSaberMais}>
                Saber mais
              </a>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.espacoVideo}></div>
          <div className={estilos.conteudoCartao}>
            <FaCamera className={estilos.icone} size={24} />
            <h3>Câmera de 1080p</h3>
            <p>Texto</p>
            <footer>
              <a href="#" className={estilos.linkSaberMais}>
                Saber mais
              </a>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.espacoVideo}></div>
          <div className={estilos.conteudoCartao}>
            <FaBatteryHalf className={estilos.icone} size={24} />
            <h3>Bateria de Qualidade</h3>
            <p>Bateria com duração de 5 a 8 horas</p>
            <footer>
              <a href="#" className={estilos.linkSaberMais}>
                Saber mais
              </a>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.espacoVideo}></div>
          <div className={estilos.conteudoCartao}>
            <FaShieldAlt className={estilos.icone} size={24} />
            <h3>Material Resistente</h3>
            <p>Texto</p>
            <footer>
              <a href="#" className={estilos.linkSaberMais}>
                Saber mais
              </a>
              <button aria-label="Adicionar" className={estilos.botaoCirculo}>
                <FaPlus size={16} />
              </button>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NossoProduto;
