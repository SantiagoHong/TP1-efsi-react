import Form  from "./components/Form.jsx";
import Listado from "./components/Listado.jsx";

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <Listado />
          </div>
        </div>
      </div>
    </>
  )
}

export default App