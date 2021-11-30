export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  inscrever(func) {
    //inscreve os objetos que vão observar a classe
    this._inscritos.push(func);
  }

  notificar() {
    //função que é executada quando ocorrer uma mudança em notas
    //para cada um dos inscritos executa a func que é passada por paramêtro
    this._inscritos.forEach((func) => func(this.notas));
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}