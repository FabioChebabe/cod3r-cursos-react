import React from 'react'

export default function Fragmento(props){
    return (
        // <React.Fragment> caso seja <> nao e possivel atribuir propriedade
        <>
            <h2>Fragmento </h2>
            <p> cuidado com esse erro!</p>
        {/* </React.Fragment> */}
        </>
    )
}