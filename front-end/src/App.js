import React, { useState, useEffect } from 'react' //useEffect -> dispara funções sempre que tiver um informação alterada
import api from './services/api'

import './App.css'
import backgroudImage from './assets/background.jpg'

import Header from './components/Header'


/**
 * fragment (<> </>), elemento vazio, container
 * útil para duplicar componentes sem a necessidade de criar uma div
 */

 /**
  * Componente
  * Propriedade -> passar informação do componente pai para o componente filho
  * Estado e Imutabiliade -> 
  */
 //useState -> retorna array com 2 posições
 //1) variável com seu valor inicial
 //2) função para atualizarmos este valor
function App() {
    const [projects, setProjects] = useState([]) //inicializar o estado com o valor do mesmo tipo, neste caso um array

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, []) //1º qual função disparar, 2º quando disparar; array de dependencias

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`])
        const response = await api.post('projects', {
            title: `teste ${Date.now()}`,
            owner: "testeowner"
        })

        const project = response.data

        setProjects([...projects, project])
    }

    return (
        <> 
            {/* <Header title="HomePage">
                <ul>
                    <li>Homepage</li>
                    <li>Projetos</li>
                    <li>Login</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projetos</li>
                </ul>
            </Header> */}

            <Header title="Projects"/>
                <ul>
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>

                <img src={backgroudImage}/>

                <button type="button" onClick={handleAddProject}>Adicionar projetos</button>
        </>
    )
}

export default App