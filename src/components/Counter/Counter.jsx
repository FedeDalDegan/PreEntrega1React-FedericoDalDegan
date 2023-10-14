import React, { useState } from 'react'

const Counter = ({onAdd}) => {

    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        // Evitar numeros negativos y 0
        if(count > 1){
            setCount(count - 1)
        }
    }

  return (
    <div className='detail--conter'>
        <div className='contador'>
            <button onClick={decrement}>Restar</button>
            <span>{ count }</span>
            <button onClick={increment}>Sumar</button>
        </div>
        <div>
            <button onClick={() => onAdd(count)}>Comprar</button>
        </div>
    </div>
  )
}

export default Counter