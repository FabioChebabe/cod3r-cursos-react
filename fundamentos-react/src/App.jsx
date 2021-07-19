import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'
import './App.css'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos'
import ParOuImpar from './componentes/condicional/ParOuImpar'
import UsuarioInfo from './componentes/condicional/UsuarioInfo'
import DiretaPai from './componentes/comunicacao/DiretaPai'
import IndiretaPai from './componentes/comunicacao/IndiretaPai'
import Input from './componentes/formulario/Input'
import Contador from './componentes/contador/Contador'
import Mega from './componentes/mega/Mega'

export default props => {
    return (
        <div className="App">
            <h1>Fundamentos react</h1>

            <div className="Cards">
                <Card titulo="#14 Desafio Megasena" color="#C71585">
                    <Mega qtd = {6}/>
                </Card>
                <Card titulo="#13 Contador" color="#4B0082">
                    <Contador numeroInicial={1} passoInicial={1}/>
                </Card>
                <Card titulo="#12 Componente controlado" color="#FF1493">
                    <Input />
                </Card>
                <Card titulo="#11 Comunicação indireta" color="#B0E0E6">
                    <IndiretaPai />
                </Card>

            <Card titulo="#10 Comunicação direta" color="#FFD700">
                    <DiretaPai />
                </Card>
                <Card titulo="#09 Renderizaçao Condicional dois" color="#8B008B">
                    <UsuarioInfo usuario={{nome: 'Jonas'}}/>
                    <UsuarioInfo usuario={{email: 'jonasbrothers@email.com'}}/>
                </Card>
                <Card titulo="#08 Renderizaçao Condicional" color="#8B008B">
                    <ParOuImpar numero={19}/>
                </Card>
                <Card titulo="#07 Tabela de Produtos" color="#0000CD">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 Lista de Aluns" color="#7FFF00">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 Componente com filhos" color="#003">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>
                <Card titulo="#04 Desafio Aleatório" color="#080">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo="#03 Fragmento" color="#FA6900">
                    <Fragmento />
                </Card>
                <Card titulo="#02 Com Parametro" color="#E94C6F">
                    <ComParametro Titulo="Segundo componente" Subtitulo="Muito legal" />
                </Card>
                <Card titulo="#01 Primeiro Componente" color="#E8B71A">
                    <Primeiro></Primeiro>
                </Card>
            </div>
            {/* <ComParametro Titulo="Segundo componente" Subtitulo="Muito legal" /> */}
            {/* <Aleatorio min={1} max={60}/> */}
            {/* <ComParametro Titulo="Segundo componente" Subtitulo="Muito legal" /> */}
            {/* {tag} */}
            {/* <strong>Olá react!!!!</strong> */}
            {/* <Primeiro /> */}
        </div>
    )
}

/* export default props =>

        <div id="app">
            <h1>Fundamentos react (Arrow)</h1>
            <Fragmento />
            <ComParametro Titulo="Segundo componente" Subtitulo="Muito legal" />
            {tag}
            <strong>Olá react!!!!</strong>
            <Primeiro></Primeiro>
            <Primeir />
        </div>
*/