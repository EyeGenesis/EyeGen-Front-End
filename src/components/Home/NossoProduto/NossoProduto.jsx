import React from "react";
import estilos from "./NossoProduto.module.css";
import {
  FaArrowRight,
  FaPlus,
  FaCamera,
  FaBatteryHalf,
  FaShieldAlt,
} from "react-icons/fa";
import designProduto from "../../../assets/img/design-produto.mp4";
import cameraProduto from "../../../assets/img/camera-produto.mp4";
import bateriaProduto from "../../../assets/img/bateria-produto.mp4";
import materialProduto from "../../../assets/img/material-produto.png";
import { Link } from "react-router-dom";

const NossoProduto = () => {
  return (
    <section className={estilos.secaoProduto}>
      <div className={estilos.containerTitulo}>
        <h2>Sobre Nosso Produto</h2>
        <p>Tranforme seu dia a dia com autonomia e segurança</p>
        <Link to="/comprar" className={estilos.botaoComprar}>
          Comprar Agora <FaArrowRight size={14} />
        </Link>
      </div>
      <div className={estilos.gradeCards}>
        <article className={`${estilos.cartao} ${estilos.cartaoGrande}`}>
          <div className={estilos.espacoVideo}>
            <video
              src={designProduto}
              className={estilos.videoElemento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaShieldAlt className={estilos.icone} size={24} />
            <h3>Design Confortável</h3>
            <p>Texto descritivo sobre o design.</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                Saber mais
              </Link>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.espacoVideo}>
            <video
              src={cameraProduto}
              className={estilos.videoElemento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaCamera className={estilos.icone} size={24} />
            <h3>Câmera de 1080p</h3>
            <p>Texto</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                Saber mais
              </Link>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.espacoVideo}>
            <video
              src={bateriaProduto}
              className={estilos.videoElemento}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaBatteryHalf className={estilos.icone} size={24} />
            <h3>Bateria de Qualidade</h3>
            <p>Bateria com duração de 5 a 8 horas</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                Saber mais
              </Link>
              <button
                aria-label="Expandir"
                className={estilos.botaoCirculo}
              ></button>
            </footer>
          </div>
        </article>
        <article className={estilos.cartao}>
          <div className={estilos.espacoVideo}>
            <img
              src={materialProduto}
              alt=""
              className={estilos.imagemElemento}
            />
          </div>
          <div className={estilos.conteudoCartao}>
            <FaShieldAlt className={estilos.icone} size={24} />
            <h3>Material Resistente</h3>
            <p>Texto</p>
            <footer>
              <Link to="/comprar" className={estilos.linkSaberMais}>
                Saber mais
              </Link>
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
