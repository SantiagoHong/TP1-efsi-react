import Cita from "./Cita.jsx"

function Listado() {

    return (
        <section>
            <h2>Administra tus citas</h2>
            <section> 
                <Cita mascota="Nina" dueno="Martín" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
                <Cita mascota="Sifon" dueno="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
                <Cita mascota="Floki" dueno="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
            </section>
        </section>
    )
}

export default Listado