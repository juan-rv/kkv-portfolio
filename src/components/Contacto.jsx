import React, { useRef } from 'react'
import "../styles/Contacto.css"

const Contacto = () => {
    const sectionRef = useRef()
return (
    <div className='contacto' id='contacto' ref={sectionRef}>
        <h1>contacto acontinuacion:</h1>
    </div>
)
}

export default Contacto