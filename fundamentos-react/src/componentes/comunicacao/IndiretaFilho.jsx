import React from 'react'

export default props => {
    // const gerarIdade = () => parseInt(Math.random() * (70 - 50) + 50)
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ e => props.quandoClicar('Fernando', /*gerarIdade()*/ 56, true) }>
                Fornecer informações
            </button>
        </div>
    )
}