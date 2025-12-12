import styles from "./PaginaEyeGlass.module.css";

// Importando os 3 componentes
import BotaoVoltar from "./componentes/BotaoVoltar/BotaoVoltar";
import GaleriaImagens from "./componentes/GaleriaImagens/GaleriaImagens";
import InfoCompra from "./componentes/InfoCompra/InfoCompra";

export default function PaginaEyeGlass() {
  return (
    <main className={styles["container-pagina"]}>
      <BotaoVoltar />

      <section className={styles["conteudo-principal"]}>
        {<GaleriaImagens />}
        {<InfoCompra />}
      </section>
    </main>
  );
}
