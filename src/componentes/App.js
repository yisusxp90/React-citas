import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';

class App extends Component {

  state = {
    error: '',
    consulta: '',
    resultado: {}
  }

  componentDidMount() {
    this.setState({
      error : false
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta){
      this.consultarAPI();
    }

  }

  consultarAPI = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    const appId = '52cccc184676ea334692437a9537a50b';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    fetch(url)
      .then(res => res.json())
      .then(datos => {
          this.setState({
              resultado: datos
          })
      })
      .catch(error => {
        console.log(error);
      })

  }

  datosConsulta = (respuesta) => {
      if(respuesta.ciudad === '' || respuesta.pais === ''){
        this.setState({
          error: true
        })
      }else{
        this.setState({
          error: false,
          consulta: respuesta
        })
      }
  }

  render() {
    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error message="Ambos campos son requeridos"/>
    }else {
      resultado = <Clima resultado={this.state.resultado} />
    }
    return (
      <div className="app">
        <Header title="clima React" />
        <Formulario 
        datosConsulta = {this.datosConsulta}/>
        {resultado}

      </div>
    );
  }
}

export default App;
