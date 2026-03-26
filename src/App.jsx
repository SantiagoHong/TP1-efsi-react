import { Form } from "./componentes/Form.jsx";
import Listado from "./componentes/Listado.jsx";
function App() {

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Form />
          </div>
          <div class="one-half column">
            <Listado />
          </div>
        </div>
      </div>
    </>
  )
}

export default App