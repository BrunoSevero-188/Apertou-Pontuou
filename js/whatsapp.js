function normalizarTelefone(telefone) {
  let numero = (telefone || "").replace(/\D/g, "");
  if (numero && !numero.startsWith("55")) numero = "55" + numero;
  return numero;
}

export function montarLink(mensagem, telefone) {
  const numero = normalizarTelefone(telefone);
  const base = numero ? `https://wa.me/${numero}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}

export function abrirWhatsApp(mensagem, telefone) {
  window.location.href = montarLink(mensagem, telefone);
}