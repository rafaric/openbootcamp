import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentB from './componentB';

class ComponenteA extends Component {
    constructor(props){
        super(props);
        this.state = {
            Nombre : 'Rafael Ricardo',
            Apellido: 'Strongoli',
            email : 'rafaelstrongoli@gmail.com',
            conectado: false

        }
    }
    render() {
        return (
            <div>
                <p>{this.state.Nombre}</p>
                <p>{this.state.Apellido}</p>
                <p>{this.state.email}</p>
                <p>{this.state.conectado}</p>
                <ComponentB />
            </div>
        );
    }
}


ComponenteA.propTypes = {
    Nombre : PropTypes.string,
    Apellido : PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


export default ComponenteA;
