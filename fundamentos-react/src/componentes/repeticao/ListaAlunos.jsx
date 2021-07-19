import React from 'react';
import alunos from '../../data/alunos'

export default props => {
const listAlunos = alunos.map(aluno => <li key={aluno.id}>{aluno.id}) {aluno.nome} -> {aluno.nota}</li>);
    return(
        <div>
            <ul style={{listStyle: "none"}}>
                {listAlunos}
                {/* <li> Ana - 9.7</li>
                <li> Carlos - 7.7</li>
                <li> marina - 9.2</li>
                <li> Alberto - 3.5</li> */}
            </ul>
        </div>
    )
}