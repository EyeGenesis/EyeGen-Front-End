// components/Login/Login.jsx
import styles from './Login.module.css';
import LoginCard from './LoginCard/LoginCard';

export default function Login() {
  return (
    <div className={styles.fundo}>
      <LoginCard />
    </div>
  );
}