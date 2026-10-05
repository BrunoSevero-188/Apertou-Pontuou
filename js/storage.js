const CHAVES = {
  nome: "ap_nome",
  telefone: "ap_tel",
  ultimo: "ap_ultimo",
};

function ler(chave) {
  try {
    return localStorage.getItem(chave) || "";
  } catch {
    return "";
  }
}

function gravar(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch {
    // armazenamento indisponível (modo privado, por exemplo): ignora
  }
}

export const storage = {
  getNome: () => ler(CHAVES.nome),
  setNome: (v) => gravar(CHAVES.nome, v.trim()),

  getTelefone: () => ler(CHAVES.telefone),
  setTelefone: (v) => gravar(CHAVES.telefone, v.replace(/\D/g, "")),

  getUltimo: () => ler(CHAVES.ultimo),
  setUltimo: (v) => gravar(CHAVES.ultimo, v),
};