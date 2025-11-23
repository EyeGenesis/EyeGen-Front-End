import style from "./Hero.module.css";
import video from "../../../assets/videos/hero-home.mp4";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={style.hero_home}>
      <div className={style.background}>
        <video src={video} autoPlay loop muted></video>
      </div>

      <div className={style.conteudo}>
        <div className={style.barra}></div>
        <span>EYEGEN</span>
        <h1>
          Inteligência que <br /> guia seus passos
        </h1>

        <button
          className={style.botaoCliente}
          onClick={() => navigate("/login")}
        >
          Já sou cliente
        </button>

        <div className={style.barra}></div>
      </div>
    </section>
  );
}
