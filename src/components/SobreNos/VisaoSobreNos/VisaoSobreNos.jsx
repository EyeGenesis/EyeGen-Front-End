import React from "react";
import estilos from "./VisaoSobreNos.module.css";
import imagemVisao from "../../../assets/metro.png";
import { useLanguage } from "../../../contexto/ContextoLingua";

const VisaoSobreNos = () => {
  const { t } = useLanguage();

  return (
    <section className={estilos.secaoVisao}>
      <div className={estilos.container}>
        <div className={estilos.colunaTexto}>
          <h2>{t.sobreNos.visao.titulo}</h2>
          <p>
            {t.sobreNos.visao.texto}
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