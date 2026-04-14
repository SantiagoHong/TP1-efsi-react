import Cita from "./Cita.jsx"
import "../styles/listado.css"
function Listado( {citas, setCitas} ) {
    return (
        <section>
            <h2>Administra tus citas</h2>
            <section> 
                {citas.map((obj, index)=>(
                    <Cita cita={obj} id={index} setCitas={setCitas} key={index} />
                ))}
            </section>
        </section>
    )
}

export default Listado