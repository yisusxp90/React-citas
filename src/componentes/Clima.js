import React, { Component } from 'react';

class Clima extends Component {
    
    mostrarResultado = () => {
        const {name, weather, main} = this.props.resultado;
        if(!name || !weather || !main) return null;
        const kelvin = 273.15;

        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-13">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado clima de: {name}</h2>
                            <p className="temperatura">Actual: {(main.temp - kelvin).toFixed(2)} &deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    render() { 
        console.log(this.props.resultado)
        return ( 
            <div className="container">{this.mostrarResultado()}</div>
         );
    }
}
 
export default Clima;