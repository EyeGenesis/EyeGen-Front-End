import React from "react";
import styles from "./HeroEspecProduto.module.css";
import { useLanguage } from "../../../contexto/ContextoLingua";

const HeroProduto = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.heroProduto}>
      <div className={styles.container}>
        <h1>{t.comprar.hero.titulo}</h1>
        <p>{t.comprar.hero.subtitulo}</p>
      </div>
    </section>
  );
};

export default HeroProduto;
