// components/Cadastro/Cadastro.jsx
import styles from './Cadastro.module.css';
import CadastroCard from './CadastroCard/CadastroCard';

export default function Cadastro() {
  return (
    <div className={styles.cadastroPage}>
      <CadastroCard />
    </div>
  );
}
