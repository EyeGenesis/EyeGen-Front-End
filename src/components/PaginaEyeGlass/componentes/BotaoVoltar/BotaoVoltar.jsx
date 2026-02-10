import styles from './BotaoVoltar.module.css';
import BtnVoltar from './../../../../assets/img/voltar.png'

export default function BotaoVoltar() {
  return (
    <button className={styles['botao-voltar']}>
      <img
        src={BtnVoltar}
        alt="Voltar"
        className={styles['icone-voltar']}
      />
    </button>
  );
}
