import "./Card.css";

function Card({ id, mascota, propietario, fecha, hora, sintomas, onDelete }) {
    return (
          <div className="cita">
              <p>Mascota: <span>{mascota}</span></p>
              <p>Dueño: <span>{propietario}</span></p>
              <p>Fecha: <span>{fecha}</span></p>
              <p>Hora: <span>{hora}</span></p>
              <p>Sintomas: <span>{sintomas}</span></p>
              <button className="button elimnar u-full-width" onClick={() => onDelete(id)}>Eliminar ×</button>
        </div>
    );
}

export default Card;