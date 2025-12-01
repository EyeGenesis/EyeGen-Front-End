import React from "react";
import estilos from "./Design.module.css";
import imgGrid1 from "../../../assets/img/frame-oculos-carrossel.png";
import videoGrid2 from "../../../assets/img/360-produto.mp4";
import videoGrid3 from "../../../assets/img/design-produto.mp4";
import imgPrincipal from "../../../assets/img/principal-design.png";
import { useLanguage } from "../../../contexto/ContextoLingua";

const SecaoDesign = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoDesign}>
      <div className={estilos.container}>
        <div className={estilos.containerTexto}>
          <h2>{t.comprar.design.titulo}</h2>
          <p>
            {t.comprar.design.texto}
          </p>
        </div>

        <div className={estilos.gradeImagens}>
          <div className={estilos.cardMidia}>
            <img src={imgGrid1} alt={t.comprar.design.altImagens.grid1} />
          </div>

          <div className={estilos.cardMidia}>
            <video
              src={videoGrid2}
              loop
              muted
              autoPlay
              playsInline
              alt={t.comprar.design.altImagens.video2}
            />
          </div>

          <div className={estilos.cardMidia}>
            <video
              src={videoGrid3}
              loop
              muted
              autoPlay
              playsInline
              alt={t.comprar.design.altImagens.video3}
            />
          </div>
        </div>

        <div className={estilos.containerProduto}>
          <img
            src={imgPrincipal}
            alt={t.comprar.design.altImagens.principal}
            className={estilos.imagemProdutoPrincipal}
          />
          <h3 className={estilos.nomeProduto}>
            {t.comprar.design.produtoNome} <span>{t.comprar.design.produtoSpan}</span>
          </h3>
          <p className={estilos.precoProduto}>{t.comprar.design.preco}</p>
          <a href="#" className={estilos.botaoComprar}>
            {t.comprar.design.botao}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecaoDesign;