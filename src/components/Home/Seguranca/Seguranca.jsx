import React from "react";
import estilos from "./Seguranca.module.css";
import imagemHomem from "../../../assets/img/idoso-section.png";
import imagemCrianca from "../../../assets/img/crianca-section.png";
import { Link } from "react-router-dom";

export default function Seguranca() {
  return (
    <section className={estilos.secaoSeguranca}>
      <div className={estilos.conteudo}>
        <h2 className={estilos.tituloPrincipal}>
          Segurança aonde quer que você vá
        </h2>

        <div className={estilos.gradeCards}>
          <article className={estilos.cartao}>
            <div className={estilos.imagemContainer}>
              <img
                src={imagemHomem}
                alt="Homem com deficiência visual usando bengala e óculos eyegen em uma cidade"
              />
            </div>
            <h3>Nosso Compromisso com sua segurança</h3>
            <p>
              Com tecnologia e empatia o EyeGen trabalha para que você possa se
              locomover sem preocupar com obstáculos
            </p>
            <footer className={estilos.linksRodape}>
              <Link to="/">Funcionalidades do Produto</Link>
              <Link to="/">Como o EYEGEN me mantém em segurança</Link>
              <Link to="/">Ver mais relatos</Link>
            </footer>
          </article>
          <article className={estilos.cartao}>
            <div className={estilos.imagemContainer}>
              <img
                src={imagemCrianca}
                alt="Criança sorrindo usando óculos eyegen em uma rua ensolarada"
              />
            </div>
            <h3>Nos preocupamos com quem é importante para você</h3>
            <p>
              O Eyegen é para todos. Desenvolvido para acompanhar cada fase da
              vida com conforto e tecnologia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
