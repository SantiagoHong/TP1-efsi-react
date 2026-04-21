import "../styles/form.css"

function Form( {setCitas} ) {

    function handleSubmit(e){
        e.preventDefault()
        const mascota = e.target.mascota.value
        const dueno = e.target.propietario.value
        const fecha = e.target.fecha.value
        const hora = e.target.hora.value
        const sintomas = e.target.sintomas.value

        const nuevaCita = {
            mascota,
            dueno,
            fecha,
            hora,
            sintomas
        }

        setCitas(prev => [...prev, nuevaCita])
        
    }

    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            <h2>Crear mi Cita</h2>

            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width"/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width"/>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}

export default Form