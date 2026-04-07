import Cita from "./Cita.jsx"

function Listado({listado}) {
    return (
        <section>
            <h2>Administra tus citas</h2>
            <section> 
                {listado.map(obj=>(
                    <Cita cita={obj}/>
                ))}
            </section>
        </section>
    )
}

export default Listado