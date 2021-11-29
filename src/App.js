import React, { Component } from "react";
import ListaDeNotas from "./Components/ListaDeNotas";
import FormularioCadastro from "./Components/FormularioCadastro";
import ListaDeCategorias from "./Components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ["Música", "Livros", "Trabalho"],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };

    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(valorCategoria) {
    const novoArrayCategorias = [...this.state.categorias, valorCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };

    this.setState(novoEstado);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
