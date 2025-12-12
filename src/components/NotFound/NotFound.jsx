import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./NotFound.module.css";
import logo404 from "../../assets/img/eyegen-icon.png";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={logo404}
        alt="Página não encontrada"
        className={styles.logo}
        variants={logoVariants}
        animate={["visible", "floating"]}
      />

      <motion.h2 className={styles.title} variants={itemVariants}>
        Página não encontrada
      </motion.h2>

      <motion.p className={styles.text} variants={itemVariants}>
        Desculpe, a página que você está procurando não existe.
      </motion.p>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/" className={styles.link}>
          Voltar para o Início
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
