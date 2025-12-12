import HeroSobreNos from "./HeroSobreNos/HeroSobreNos";
import VisaoSobreNos from "./VisaoSobreNos/VisaoSobreNos";
import NossaBussola from "./NossaBussola/NossaBussola";
import MissaoSobreNos from "./NossaMissao/MissaoSobreNos";
import QuemSomos from "./QuemSomos/QuemSomos";
import estilo from "./SobreNos.module.css";

export default function SobreNos() {
  return (
    <div className={estilo.container}>
      <HeroSobreNos />
      <VisaoSobreNos />
      <NossaBussola />
      <MissaoSobreNos />
      <QuemSomos />
    </div>
  );
}
