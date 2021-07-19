import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Fábio Carnelli" idade={22} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Júlia Carnelli" idade={25} nerd={true}></DiretaFilho>
        </div>
    )
}