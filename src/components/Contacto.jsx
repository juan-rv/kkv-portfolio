import React, { useRef } from 'react'
import "../styles/Contacto.css"

const Contacto = () => {
    const sectionRef = useRef()

return (
<div className="contact-form-container">
    <h2 className="contact-form-title">Reserva</h2>
    <form>
        <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input/>
            </div>
            <div className="form-group">
        <label htmlFor="name">Locacion:</label>
        <input/>
        </div>
        <div className="form-group">
        <label htmlFor="name">Email:</label>
        <input/>
        </div>
        <div className="form-group">
                <label htmlFor="email">Whatsapp:</label>
        <input/>
        </div>
        <div className="form-group">
                <label htmlFor="email">Tipo de evento:</label>
        <input/>
        </div>
        <div className="form-group">
                <label htmlFor="email">Nombre del Evento:</label>
        <input/>
        </div>
        <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea/>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
    </form>
    </div>
)
}

export default Contacto