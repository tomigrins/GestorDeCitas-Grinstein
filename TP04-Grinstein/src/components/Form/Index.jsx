import "./Form.css";
import { useState } from "react";

function Form({ addAppointment }) {
    const [form, setForm] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!form.mascota.trim()) return
        const nuevaCita = { ...form, id: Date.now() }
        addAppointment(nuevaCita)
        setForm({ mascota: "", propietario: "", fecha: "", hora: "", sintomas: "" })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={form.mascota} onChange={handleChange} />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={form.propietario} onChange={handleChange} />
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={form.fecha} onChange={handleChange} />
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" value={form.hora} onChange={handleChange} />
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" value={form.sintomas} onChange={handleChange}></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    );
}

export default Form;