import React, { Component } from 'react';
import Gasto from './Gasto';
//Object keys para iterar un objeto, con map se accede al objeto
//gasto={this.props.gastos[key]} aqui el key hace que se cree un objeto nuevo, con su info actualizada cada vez que se ingresa informacion
//key={key}, asi guarda la referencia

class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>

                {Object.keys(this.props.gastos).map(key => (
                    <Gasto
                        key={key}
                        gasto={this.props.gastos[key]}
                    />
                ))}

            </div>

        )
    }
}
export default Listado;