import styles from './MetodosPagamento.module.css';

import mastercard from '../../../assets/img/mastercard.png';
import pix from '../../../assets/img/pix.png';
import visa from '../../../assets/img/visa.png';
import paypal from '../../../assets/img/paypal.png';
import googlepay from '../../../assets/img/googlepay.png';
import applepay from '../../../assets/img/applepay.png';


const MetodosPagamento = () => {
  const metodos = [
    { id: 1, nome: 'Mastercard', imagem: mastercard },
    { id: 2, nome: 'Pix', imagem: pix },
    { id: 3, nome: 'Visa', imagem: visa },
    { id: 4, nome: 'PayPal', imagem: paypal },
    { id: 5, nome: 'Google Pay', imagem: googlepay },
    { id: 6, nome: 'Apple Pay', imagem: applepay },
  ];

  return (
    <div className={styles.container}>
      <label className={styles.label}>Métodos de pagamento</label>
      
      <div className={styles.metodos}>
        {metodos.map((metodo) => (
          <div 
            key={metodo.id} 
            className={styles.metodo}
            title={metodo.nome}
          >
            <img 
              src={metodo.imagem} 
              alt={metodo.nome} 
              className={styles.imagem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetodosPagamento;
