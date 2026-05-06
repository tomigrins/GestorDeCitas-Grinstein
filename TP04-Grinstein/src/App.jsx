import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title/Index'
import Form from './components/Form/Index'
import Lista from './components/Lista/Index'

function App() {
  const [citas, setCitas] = useState(() => {
    const guardado = localStorage.getItem('citas');
    return guardado ? JSON.parse(guardado) : [];
  })

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  function agregarCita(nuevaCita) {
    setCitas(anterior => [...anterior, nuevaCita])
  }

  function eliminarCita(id) {
    setCitas(anterior => anterior.filter(c => c.id !== id))
  }

  return (
    <>
      <Title />
      <section>
        <div>
          <h1>CREAR MI CITA</h1>
          <Form agregarCita={agregarCita} />
        </div>
        <div>
          <h1>ADMINISTRA TUS CITAS</h1>
          <Lista citas={citas} eliminarCita={eliminarCita} />
        </div>
      </section>
    </>
  )
}

export default App
