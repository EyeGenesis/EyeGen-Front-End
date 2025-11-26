import React from "react";
import estilos from "./MissaoSobreNos.module.css";
import iconeUniao from "../../../assets/Union.png";
import imagemGrupo from "../../../assets/missao-grupo.png";

const MissaoSobreNos = () => {
  return (
    <section className={estilos.secaoMissao}>
      <div className={estilos.container}>
        <div className={estilos.colunaImagem}>
          <div className={estilos.wrapperImagem}>
            <div className={estilos.fundoAzul}></div>
            <div className={estilos.fundoRosa}></div>
            <img
              src={imagemGrupo}
              alt="Grupo diverso de pessoas sorrindo e conversando"
              className={estilos.fotoPrincipal}
            />
          </div>
        </div>

        <div className={estilos.colunaTexto}>
          <div className={estilos.tituloWrapper}>
            <h2>O que nos move</h2>
            <img
              src={iconeUniao}
              alt="Icone de união"
              className={estilos.iconeTitulo}
            />
          </div>

          <p>
            Nossa missão é promover a autonomia e elevando significativamente a
            sua qualidade de vida. <br />
            Acreditamos que todos merecem as ferramentas e o suporte para viver
            uma vida plena e independente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissaoSobreNos;
