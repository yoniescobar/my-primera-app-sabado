import React from 'react'
import Datos from './components/Datos'
import Eventos from './components/Eventos'
import ApiRickMorty from './components/ApiRickMorty'

const App = () => {
  return (
    <div className='container'>
      <h1 className="text-warning">React componente App</h1>

      <h2 className="text-success">Componente Datos</h2>
      {/* <Datos /> */}
      <h2 className="text-danger">Componente Eventos</h2>
      {/* <Eventos /> */}
      <h2 className="text-info">Componente ApiRickMorty</h2>
      <ApiRickMorty />
      
    </div>
  )
}

export default App
