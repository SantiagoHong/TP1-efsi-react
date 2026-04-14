import Form  from "./components/Form.jsx"
import Listado from "./components/Listado.jsx"
import { useState } from 'react'
import './styles/app.css'

function App() {
  const [citas, setCitas] = useState([])

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form setCitas = {setCitas} />
          </div>
          <div className="one-half column">
            <Listado citas = {citas} setCitas = {setCitas}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App