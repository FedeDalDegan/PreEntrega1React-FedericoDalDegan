import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(1);
  const [isBuying, setIsBuying] = useState(false); // Nuevo estado para controlar la compra

  const increment = () => {
    if (isBuying) return;
    setCount(count + 1);
  };

  const decrement = () => {
    if (isBuying || count <= 1) return;
    setCount(count - 1);
  };

  const handleBuyClick = async () => {
    if (isBuying) return; // Evitar múltiples clics
    setIsBuying(true); // Deshabilitar el botón "Comprar"

    onAdd(count);
    toast.success('Item agregado al carrito ✔️', {
      position: 'top-left',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

    // Espera hasta que el toast se muestre por completo
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // La linea de abajo BORRA EL CARRITO. NO USAR
    // window.location.href = '/';
  };

  return (
    <div className="detail--counter">
        <div className="gap">
            <div className="contador">
                <button onClick={decrement} disabled={isBuying}>Restar</button>
                <span>{count}</span>
                <button onClick={increment} disabled={isBuying}>Sumar</button>
            </div>
            <div>
                <button onClick={handleBuyClick} disabled={isBuying}>
                {isBuying ? "Añadido" : "Comprar"}
                </button>
                <ToastContainer />
            </div>
            <div>
                {
                    isBuying &&
                    <NavLink exact="true" to="/" className="nav-link"><button>Seguir comprando</button></NavLink>
                }
            </div>
        </div>
    </div>
  );
};

export default Counter;