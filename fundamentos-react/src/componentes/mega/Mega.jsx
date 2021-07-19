import React, {useState} from 'react'

export default props => {    
    function gerarNumeroNaoContido(array){
        const aleatorio = parseInt(Math.random() * (60) + 1);
        return array.includes(aleatorio) ? gerarNumeroNaoContido(array) : aleatorio;
    }
    function gerarNumeros(qtd){
        const numeros = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1,n2) => n1-n2);

        return numeros;
    }
    const [qtd, setQtd] = useState(props.qtd || 6);
    const numerosIniciais = gerarNumeros(qtd);
    const [numeros, setNumeros] = useState(numerosIniciais);
    // const [numeros, setNumeros] = useState(Array(6).fill(0));
    // const [qtd, setQtd] = useState(6);
    return (
        <div>
            <h3>Insira um numero de 1 a 9</h3>
            <div>
                <label>qtd de numeros</label>
                <input type="number" value={qtd} 
                onChange={e => setQtd(+e.target.value)}></input>
            </div>
            <h3>{numeros.join(' ')}</h3>            
            <button onClick={e => setNumeros(gerarNumeros(qtd))}>Gerar numeros</button>
        </div>
    )
}