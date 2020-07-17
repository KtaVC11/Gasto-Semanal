import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    //refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    //el (e) es para evitar el .bind
    crearGasto = (e) => {
        //1-prevenir el default
        e.preventDefault();

        //2- crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value
        }
        //console.log(gasto);

        //3-agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);
        //4-resetear el formulario(opcional)
        e.currentTarget.reset();
    }
    render() {
        //dentro del onSubmit se llama al metodo que se necesita
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>

        )
    }
}
//aqui va solo lo que se esta agregando por props
Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Formulario;