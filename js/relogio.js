import { formatarHora, formatarDataExtenso } from "./formatador.js";

export function iniciarRelogio(elRelogio, elData) {
  function atualizar() {
    const agora = new Date();
    elRelogio.textContent = formatarHora(agora);
    elData.textContent = formatarDataExtenso(agora);
  }

  atualizar();
  return setInterval(atualizar, 1000);
}