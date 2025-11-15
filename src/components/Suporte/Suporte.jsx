import style from "./Suporte.module.css";
import HeroSuporte from "./HeroSuporte/HeroSuporte";
import GuiasUso from "./GuiasUso/GuiasUso";
import CentralAjuda from "./CentralAjuda/CentralAjuda";
import AttFirmware from "./AttFirmware/AttFirmware";

export default function Suporte() {
  return (
    <main>
        <HeroSuporte />
        <GuiasUso />
        <CentralAjuda />
        <AttFirmware />
    </main>
  );
}