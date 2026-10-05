const pad = (n) => String(n).padStart(2, "0");

export function formatarData(d) {
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

export function formatarHora(d) {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function formatarDataExtenso(d) {
  return d.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * tipo: "entrada" | "saida"
 */
export function montarMensagem(nome, tipo, d = new Date()) {
  return `O usuário ${nome} registrou ponto de ${tipo} do dia ${formatarData(d)} às ${formatarHora(d)}`;
}