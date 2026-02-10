import { useState } from 'react';
import styles from './InfoCompra.module.css';
import MasterCard from './../../../../assets/img/mastercard.png';
import Pix from './../../../../assets/img/pix.png';
import Visa from './../../../../assets/img/visa.png';
import Paypal from './../../../../assets/img/paypal.png';
import Estrela from './../../../../assets/img/star.svg';

export default function InfoCompra() {

  // Cor selecionada
  const [corAtiva, setCorAtiva] = useState(null);

  // Quantidade
  const [quantidade, setQuantidade] = useState(1);

  // Método de pagamento
  const [metodoAtivo, setMetodoAtivo] = useState(null);

  // Listas
  const cores = ["#ff4c84", "#3bb4ff", "#7bed8d", "#b19bff", "#d7ff26"];

  const metodosPagamento = [
    MasterCard,
    Pix,
    Visa,
    Paypal,
  ];

  // Funções de quantidade
  function diminuir() {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  }

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  return (
    <div className={styles["container-compra"]}>

      {/* Titulo */}
      <h1 className={styles["titulo"]}>
        <span>EYE</span>
        Glass
      </h1>

      {/* Descrição */}
      <p
        className={styles["descricao"]}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}
      >
        óculos inteligente de assistência visual, focado em aumentar a segurança e a autonomia do usuário
      </p>

      {/* Avaliação */}
      <div className={styles["avaliacao"]}>
        <div className={styles["estrelas"]}>
          {[1,2,3,4,5].map(i => (
            <img
              key={i}
              src={Estrela}
              className={styles["estrela"]}
              alt="estrela"
            />
          ))}
        </div>
        <span className={styles["numero-avaliacoes"]}>(193)</span>
      </div>

      {/* PREÇO */}
      <p
        className={styles["preco"]}
        style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 600 }}
      >
        R$ 3000.00
      </p>

      <hr className={styles["linha"]} />

      {/* COR */}
      <div className={styles["secao"]}>
        <p className={styles["label"]}>Color:</p>

        <div className={styles["cores"]}>
          {cores.map((cor, index) => (
            <div
              key={index}
              onClick={() => setCorAtiva(index)}
              className={`${styles.cor} ${corAtiva === index ? styles["cor-selecionada"] : ""}`}
              style={{ backgroundColor: cor }}
            />
          ))}
        </div>
      </div>

      {/* Quantidade */}
      <div className={styles["quantidade-container"]}>
        <p className={styles["label"]}>Quantidade</p>

        <div className={styles["quantidade-box"]}>
          <button className={styles["quantidade-btn"]} onClick={diminuir}>-</button>
          <span className={styles["quantidade-numero"]}>{quantidade}</span>
          <button className={styles["quantidade-btn"]} onClick={aumentar}>+</button>
        </div>
      </div>

      <hr className={styles["linha"]} />

      {/* PAGAMENTO */}
      <p className={styles["label"]}>Métodos de pagamento</p>

      <div className={styles["pagamentos"]}>
        {metodosPagamento.map((img, index) => (
          <div
            key={index}
            onClick={() => setMetodoAtivo(index)}
            className={`${styles["pagamento-item"]} ${
              metodoAtivo === index ? styles["pagamento-selecionado"] : ""
            }`}
          >
            <img src={img} alt="Método de pagamento"/>
          </div>
        ))}
      </div>

      {/* Botoes */}
      <button className={styles["botao-cartao"]}>Adicionar Cartão</button>
      <button className={styles["botao-comprar"]}>Confirmar Compra</button>

    </div>
  );
}
