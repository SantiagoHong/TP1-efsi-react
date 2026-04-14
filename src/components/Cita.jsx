import "../styles/cita.css"
function Cita( {cita, setCitas, id} ) {
    const {mascota,dueno,fecha,hora,sintomas} = cita;

    const eliminarCita = () => {
        if (confirm("¿Estás seguro de eliminar esta cita?")) {
            setCitas(prev => {
                const newCitas = [...prev]
                newCitas.splice(id, 1)
                return newCitas
            })
        } else {
            console.log("Acción cancelada");
        }
        
    }

    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{dueno}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={eliminarCita}>Eliminar ×</button>
        </div>
    )
}

export default Cita