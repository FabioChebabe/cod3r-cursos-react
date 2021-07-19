// crir tabela usando jsx e mostrando todos os produtos na sua devida coluna
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
    const listProdutos = produtos.map(produto => {
    return(
        <tr key={produto.id}>
            <td>{produto.id})</td>
            <td>{produto.nome}</td>
            <td>custa: R$ {produto.preco.toFixed(2).replace('.',',')} </td>
        </tr> 
        );
    });
    return (
        <table >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                {listProdutos}
            </thead>
        </table>
    )
}