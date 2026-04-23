import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title/Index'
import Form from './components/Form/Index'
import Lista from './components/Lista/Index'

function App() {
  const [citas, setCitas] = useState([])

  function addAppointment(nuevaCita) {
    setCitas(prev => [...prev, nuevaCita])
  }

  function deleteAppointment(id) {
    setCitas(prev => prev.filter(c => c.id !== id))
  }

  return (
    <>
      <Title />
      <section>
        <div>
          <h1>CREAR MI CITA</h1>
          <Form addAppointment={addAppointment} />
        </div>
        <div>
          <h1>ADMINISTRA TUS CITAS</h1>
          <Lista citas={citas} deleteAppointment={deleteAppointment} />
        </div>
      </section>
    </>
  )
}

export default App
