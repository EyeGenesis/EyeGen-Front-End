import style from "./Hero.module.css";
import video from "../../../assets/videos/hero-home.mp4";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../contexto/ContextoLingua";

export default function Hero() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <section className={style.hero_home}>
      <div className={style.background}>
        <video src={video} autoPlay loop muted></video>
      </div>

      <div className={style.conteudo}>
        <div className={style.barra}></div>
        <span>EYEGEN</span>
        <h1>
          {t.home.hero.titulo}
        </h1>

        <button
          className={style.botaoCliente}
          onClick={() => navigate("/login")}
        >
          {t.home.hero.botao}
        </button>

        <div className={style.barra}></div>
      </div>
    </section>
  );
}
