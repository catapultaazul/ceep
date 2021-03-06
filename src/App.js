import React from 'react';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import './app.css';
import './index.css';

class App extends Component {
  constructor() {
    super()
    this.notas = [];
    this.state ={
      notas:[]
    }
  }
  
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
    
        <ListaDeNotas notas={this.state.notas}/>
       
      </section>
    );
  }
}

export default App;
