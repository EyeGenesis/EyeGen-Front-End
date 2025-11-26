import React from "react";
import estilos from "./VisaoSobreNos.module.css";
import imagemVisao from "../../../assets/metro.png";

const VisaoSobreNos = () => {
  return (
    <section className={estilos.secaoVisao}>
      <div className={estilos.container}>
        <div className={estilos.colunaTexto}>
          <h2>Um Olhar Sem Fronteiras</h2>
          <p>
            A visão do EyeGen é tornar-se a principal referência global em
            tecnologia assistiva para pessoas com baixa ou nenhuma visão,
            evoluindo continuamente por meio de inovação e pesquisa, a fim de
            oferecer soluções práticas e intuitivas que promovam autonomia e
            melhoram a qualidade de vida.
          </p>
        </div>
        <div className={estilos.colunaImagem}>
          <div className={estilos.imageWrapper}>
            <img
              src={imagemVisao}
              alt="Homem com deficiência visual usando óculos EyeGen em uma estação de metrô"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaoSobreNos;
