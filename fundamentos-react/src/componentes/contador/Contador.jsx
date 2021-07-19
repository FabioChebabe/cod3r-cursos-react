import React from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'
import './Contador.css'

export default class Contador extends React.Component{
    constructor(props){
        super();
        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5,
        };
        // this.inc = this.inc.bind(this);
        // this.dec = this.dec.bind(this);
    }
    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    }
    
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
            </div>
        )
    }
}
        // inc(){
        //     this.setState({
        //         numero: this.state.numero + 1
        //     })
        // }
        // dec(){
        //     this.setState({
        //         numero: this.state.numero - 1
        //     })
        // }