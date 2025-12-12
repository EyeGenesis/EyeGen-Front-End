import style from "./Home.module.css";
import Hero from "./Hero/Hero";
import Seguranca from "./Seguranca/Seguranca";
import InfoMascote from "./InfoMascote/InfoMascote";
import NossoProduto from "./NossoProduto/NossoProduto";
import QuemUsa from "./QuemUsa/QuemUsa";
import Comunidade from "./Comunidade/Comunidade";
import Apoiadores from "./Apoiadores/Apoiadores";
import Contribuicao from "./Contribuicao.jsx/Contribuicao";
import { useLanguage } from "../../contexto/ContextoLingua";

export default function Home() {

  const { t } = useLanguage();

  return (
    <main>
      <section className={style.home}>
        <Hero />
        <div className={style.eyegen_ajuda}>
          <h1>
            {t.home.ajuda.titulo}
          </h1>
        </div>
        <Seguranca />
        <InfoMascote />
        <NossoProduto />
        <QuemUsa />
        <Comunidade />
        <Apoiadores />
        <Contribuicao />
      </section>
    </main>
  );
}
