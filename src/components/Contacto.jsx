import React, { useRef } from 'react'
import "../styles/Contacto.css"

const Contacto = () => {
    const sectionRef = useRef()
return (
    <div className='contacto' id='contacto' ref={sectionRef}>
        <h1>contacto acontinuacion:</h1>
        <form >
    <div>
        <label htmlFor="name">Nombre:</label>
        <input/>
    </div>
    <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input/>
    </div>
    <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea/>
    </div>
    <button type="submit">Enviar</button>
    </form>
    </div>
)
}

export default Contacto