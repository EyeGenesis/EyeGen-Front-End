import HeroSuporte from "./HeroSuporte/HeroSuporte";
import GuiasUso from "./GuiasUso/GuiasUso";
import CentralAjuda from "./CentralAjuda/CentralAjuda";
import AttFirmware from "./AttFirmware/AttFirmware";
import ContatoSuporte from "./ContatoSuporte/ContatoSuporte";

export default function Suporte() {
  return (
    <main>
      <HeroSuporte />
      <GuiasUso />
      <CentralAjuda />
      <AttFirmware />
      <ContatoSuporte />
    </main>
  );
}
