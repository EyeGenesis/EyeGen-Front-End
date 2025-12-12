import React from "react";
import estilos from "./MissaoSobreNos.module.css";
import iconeUniao from "../../../assets/Union.png";
import imagemGrupo from "../../../assets/missao-grupo.png";
import { useLanguage } from "../../../contexto/ContextoLingua";

const MissaoSobreNos = () => {
  const { t } = useLanguage();

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
            <h2>{t.sobreNos.missao.titulo}</h2>
            <img
              src={iconeUniao}
              alt="Icone de união"
              className={estilos.iconeTitulo}
            />
          </div>

          <p>
            {t.sobreNos.missao.texto}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissaoSobreNos;