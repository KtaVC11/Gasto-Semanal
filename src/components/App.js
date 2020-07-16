import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
///********************************************************************************************/
//la idea del proyecto es que se leen los gastos, se envian al state a la aplicacion principal
// y esa app principal los reparte hacia listado, en listado se comunica con gastos
//la idea principal es saber que se tiene un componente principal
//en el se crea un formulario, ese formulario sirve para crear los gastos
//y de ahi se retornan los datos de nuevo al componente principal
//y de ahi se comunican hacia listado con state, de ahi se leen en listado
// y se vuelven a pasar a un hijo
//***********************************************************************************************/



//los props solo se envian del padre al hijo
//se pued enviar una funcion del padre al hijo, pero pueden fluir los datos de ambas formas con una funcion
//desde del componente padre se crea una funcion que se encarga de cargar todo en el state, pasa eso al formulario
class App extends Component {
  //en un formulario se pueden enviar props o states

  //*1-crear el state
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}

  }
  //la idea es tener este didmount sin mucho codigo
  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto?');
    console.log(presupuesto);
  }

  //funcion que carga los datos al formulario
  //agregar un nuevo gasto el state
  agregarGasto = gasto => {
    //1-tomar una copia del state actual,spread operator
    const gastos = { ...this.state.gastos };
    //console.log('Se agrego gastos' + gasto);
    //console.log(gastos);


    //2-agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    console.log(gastos);


    //3-ponerlo en el state, cuando se agrega algo al state es con el setState
    this.setState({
      gastos //la llave y la variable gastos se llaman igual...
    })
  }
  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gasto Semanal '
        />
        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='one-half column'>
              <Formulario
                agregarGasto={this.agregarGasto} //aqui el prop y el metodo se llaman igual, metodo es lo que va antes del = y dentro del {} va el prop

              />

            </div>
            <div className='one-half column'>
              <Listado
                gastos={this.state.gastos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
