import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        // Control de STOCK
        if(count > 0){
            setCount(count - 1)
        }
    }

  return (
    <div className='detail--conter'>
        <button onClick={decrement}>Restar</button>
        <span>{ count }</span>
        <button onClick={increment}>Sumar</button>
    </div>
  )
}

export default Counter