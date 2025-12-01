import React from "react";
import estilos from "./Seguranca.module.css";
import imagemHomem from "../../../assets/img/idoso-section.png";
import imagemCrianca from "../../../assets/img/crianca-section.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexto/ContextoLingua"; // Importar contexto

export default function Seguranca() {
  const { t } = useLanguage(); // Usar hook

  return (
    <section className={estilos.secaoSeguranca}>
      <div className={estilos.conteudo}>
        <h2 className={estilos.tituloPrincipal}>
          {t.home.seguranca.titulo}
        </h2>

        <div className={estilos.gradeCards}>
          <article className={estilos.cartao}>
            <div className={estilos.imagemContainer}>
              <img
                src={imagemHomem}
                alt="Homem com deficiência visual usando bengala e óculos eyegen em uma cidade"
              />
            </div>
            <h3>{t.home.seguranca.card1.titulo}</h3>
            <p>
              {t.home.seguranca.card1.texto}
            </p>
            <footer className={estilos.linksRodape}>
              <Link to="/">{t.home.seguranca.card1.link1}</Link>
              <Link to="/">{t.home.seguranca.card1.link2}</Link>
              <Link to="/">{t.home.seguranca.card1.link3}</Link>
            </footer>
          </article>
          <article className={estilos.cartao}>
            <div className={estilos.imagemContainer}>
              <img
                src={imagemCrianca}
                alt="Criança sorrindo usando óculos eyegen em uma rua ensolarada"
              />
            </div>
            <h3>{t.home.seguranca.card2.titulo}</h3>
            <p>
              {t.home.seguranca.card2.texto}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}