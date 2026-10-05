import { montarMensagem } from "./formatador.js";
import { iniciarRelogio } from "./relogio.js";
import { storage } from "./storage.js";
import { abrirWhatsApp } from "./whatsapp.js";

const $ = (id) => document.getElementById(id);

const nomeInput = $("nome");
const telInput = $("telefone");
const aviso = $("aviso");
const ultimoEl = $("ultimo");

function mostrarUltimo() {
  const ultimo = storage.getUltimo();
  if (!ultimo) return;
  ultimoEl.style.display = "block";
  ultimoEl.textContent = "Último registro: " + ultimo;
}

function registrar(tipo) {
  const nome = nomeInput.value.trim();

  if (!nome) {
    aviso.textContent = "Digite seu nome antes de registrar o ponto.";
    nomeInput.focus();
    return;
  }

  // A hora é capturada no instante exato do toque
  const mensagem = montarMensagem(nome, tipo, new Date());

  storage.setUltimo(mensagem);
  mostrarUltimo();

  abrirWhatsApp(mensagem, storage.getTelefone());
}

function iniciar() {
  nomeInput.value = storage.getNome();
  telInput.value = storage.getTelefone();
  mostrarUltimo();

  iniciarRelogio($("relogio"), $("data"));

  nomeInput.addEventListener("input", () => {
    storage.setNome(nomeInput.value);
    aviso.textContent = "";
  });

  telInput.addEventListener("input", () => {
    storage.setTelefone(telInput.value);
  });

  $("btnEntrada").addEventListener("click", () => registrar("entrada"));
  $("btnSaida").addEventListener("click", () => registrar("saida"));
}

iniciar();