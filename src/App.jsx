import Form  from "./components/Form.jsx";
import Listado from "./components/Listado.jsx";

function App() {

  const list = [
    {mascota: "Nina", dueno: "Martín", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna"},
    {mascota: "Sifon", dueno: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho"},
    {mascota: "Floki", dueno: "Ari", fecha: "2023-08-05", hora: "16:15", sintomas: "No está comiendo"}
  ]

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <Listado listado={list} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App