import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import logo404 from "../../assets/img/eyegen-icon.png";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={logo404} alt="Página não encontrada" className={styles.logo} />

      <h2 className={styles.title}>Página não encontrada</h2>
      <p className={styles.text}>
        Desculpe, a página que você está procurando não existe.
      </p>

      <Link to="/" className={styles.link}>
        Voltar para o Início
      </Link>
    </div>
  );
};

export default NotFound;
