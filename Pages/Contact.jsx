import React from 'react'
import CarouselsContact from "../src/components/Carousels/CarouselsContact"

const Contact = () => {
  return (
    <div>
      <CarouselsContact />
      <form action="" className='form-container'>
        <div>
          <div>
            <label htmlFor="usuario">Usuario</label>
          </div>
          <input type="text" name="usuario" required/>
        </div>
        <div>
          <div>
            <label htmlFor="contraseña">Contraseña</label>
          </div>
          <input type="password" required/>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input type="text" required/>
        </div>
        <div>
          <div>
            <label htmlFor="email">Mensaje</label>
          </div>
          <input type="text" id='msg'/>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
