import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getFirestore, collection, addDoc} from "firebase/firestore"
import CartContext from '../../context/cartContext/cartContext'
import { NavLink } from 'react-router-dom'
import "../Cart/cartStyle.css"

const cartDetail = () => {

    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const navigate = useNavigate()

    const addToCart = () => {
        const purchase = {
            buyer: {
                id: 1,
                name: "fnh",
                mail: "f@gmail.com",
            },
            items: cart,
            date: new Date(),
            total: 1,
        };

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, purchase)
            .then(res => {
                setOrderId(res.id)
                navigate(`/checkout/${res.id}`)
            })
            .catch(error => console.log(error))

        clear()
    }

    const calculateItemTotal = (item, quantity) => {
        return quantity * item.price;
    };
      
      const cartTotal = cart.reduce((total, item) => {
        return total + calculateItemTotal(item, item.quantity);
    }, 0);

  return (
    <div className='cart-order'>
        <div className='cart-container'>
            {
                cart.map(el => (
                    <div key={el.id} className='cart-items'>
                        <img src={el.image} alt="" />
                        <p>Juego: {el.name}</p>
                        <p>Cantidad: {el.quantity}</p>
                        <p>Total: ${calculateItemTotal(el, el.quantity).toFixed(2)}</p>
                        <button onClick={()=>removeItem(el.id)}>Eliminar</button>
                    </div>
                ))
            }
        </div>
        {/* <div>
            {
            cart.length > 0 && 
            <button onClick={addToCart}>Crear compra</button>
            }
            {
            cart.length > 0 && 
            <p>Precio Total del Carrito: ${cartTotal.toFixed(2)}</p>
            }
        </div> */}
        {/* Forma mas optima de hacerlo */}
        <div>
            {cart.length > 0 && (
                <div>
                    <button onClick={addToCart}>Crear compra</button>
                    <p>Precio Total del Carrito: ${cartTotal.toFixed(2)}</p>
                </div>
            )}
        </div>
        <div style={{display: "flex", justifyContent: "center"}}> 
            {
                cart.length == 0 &&
                <NavLink exact="true" to="/" className="nav-link"><button>Carrito vacio. Volver a inicio</button></NavLink>
            }
        </div>
        <div>
            {
                cart.length >= 1 &&
                <NavLink exact="true" to="/" className="nav-link"><button>Seguir comprando</button></NavLink>
            }
        </div>
        <div>
            {
                orderId && 
                <span>Orden creada. Nº de orden: {orderId}</span>
            }
        </div>
    </div>
  )
}

export default cartDetail