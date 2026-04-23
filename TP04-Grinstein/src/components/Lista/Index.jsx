import Card from "../Card/Index";
import "./Lista.css";


function Lista({ citas = [], deleteAppointment }) {
    return (
        <section className="listado-citas">
            {citas.length === 0 ? (
                <p>No hay citas</p>
            ) : (
                citas.map(cita => (
                    <Card
                        key={cita.id}
                        id={cita.id}
                        mascota={cita.mascota}
                        propietario={cita.propietario}
                        fecha={cita.fecha}
                        hora={cita.hora}
                        sintomas={cita.sintomas}
                        onDelete={deleteAppointment}
                    />
                ))
            )}
        </section>
    );
}

export default Lista;