import React from "react";
import estilos from "./Design.module.css";
import imgGrid1 from "../../../assets/img/frame-oculos-carrossel.png";
import videoGrid2 from "../../../assets/img/360-produto.mp4";
import videoGrid3 from "../../../assets/img/design-produto.mp4";
import imgPrincipal from "../../../assets/img/principal-design.png";

const SecaoDesign = () => {
  return (
    <section className={estilos.secaoDesign}>
      <div className={estilos.container}>
        <div className={estilos.containerTexto}>
          <h2>Design Elegante</h2>
          <p>
            Apresentam um design esportivo e elegante em preto, com lentes
            escuras de formato curvado para um visual moderno e proteção
            otimizada.
          </p>
        </div>

        <div className={estilos.gradeImagens}>
          <div className={estilos.cardMidia}>
            <img src={imgGrid1} alt="Detalhe do óculos" />
          </div>

          <div className={estilos.cardMidia}>
            <video
              src={videoGrid2}
              loop
              muted
              autoPlay
              playsInline
              alt="Vídeo de demonstração do óculos"
            />
          </div>

          <div className={estilos.cardMidia}>
            <video
              src={videoGrid3}
              loop
              muted
              autoPlay
              playsInline
              alt="Outro vídeo de demonstração do óculos"
            />
          </div>
        </div>

        <div className={estilos.containerProduto}>
          <img
            src={imgPrincipal}
            alt="Óculos EYE Glass"
            className={estilos.imagemProdutoPrincipal}
          />
          <h3 className={estilos.nomeProduto}>
            EYE <span>Glass</span>
          </h3>
          <p className={estilos.precoProduto}>R$ 2000,00</p>
          <a href="#" className={estilos.botaoComprar}>
            Comprar
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecaoDesign;
