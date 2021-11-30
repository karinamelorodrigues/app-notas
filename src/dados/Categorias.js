export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    //inscreve os objetos que vão observar a classe
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    //função que é executada quando ocorrer uma mudança em categorias
    //para cada um dos inscritos executa a func que é passada por paramêtro
    this._inscritos.forEach((func) => func(this.categorias));
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
