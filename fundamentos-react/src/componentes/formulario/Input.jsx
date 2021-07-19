import React, { useState } from 'react'
// import Aleatorio from './Aleatorio'
import './Input.css'

export default props =>{
    const [valor, setValor] = useState('');
    function testaNumero(aleatorio, num){
        if(num > aleatorio){
            return console.log('Numero maior, tente um menor');
        }
        else if(num < aleatorio){
            return console.log('Numero menor, tente um numero maior');
        }
        else{
            return console.log('Parabens, voce acertou o numero');
        }
    }

    function quandoMudar(e){
        setValor(e.target.value)
    }
    function teste(){
        // testaNumero(valor, aleatorio)
        setValor('');
    }
    return (
        <div className="Input">
            {/* <h2>Digite um numero de 0 a 100 {valor}</h2> */}
            <input value={valor} onChange={quandoMudar}></input>
            {/* <Aleatorio quandoClicar={forneceNum} /> */}
            {/* <input value={undefined} /> */}
            {/* se o valor for nao definido, a variavel e sem esatdo */}
            <button onClick={teste} >Enviar</button>
            {/* <Aleatorio /> */}
        </div>
    )
}