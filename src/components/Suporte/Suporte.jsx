import HeroSuporte from "./HeroSuporte/HeroSuporte";
import GuiasUso from "./GuiasUso/GuiasUso";
import CentralAjuda from "./CentralAjuda/CentralAjuda";
import AttApp from "./AttApp/AttApp";
import ContatoSuporte from "./ContatoSuporte/ContatoSuporte";

export default function Suporte() {
  return (
    <main>
      <HeroSuporte />
      <GuiasUso />
      <CentralAjuda />
      <AttApp />
      <ContatoSuporte />
    </main>
  );
}
