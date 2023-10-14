import { getFirestore, updateDoc, doc } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
    const { orderId } = useParams()

    const updateOrder = () => {
        const db = getFirestore()
        const orderDocRef = doc(db, "orders", orderId);

        const orderUpdate = {
            status: "Completado",
        };

        updateDoc(orderDocRef, orderUpdate)
            .then(() => console.log("Orden actualizada"))
            .catch(error => console.log("Error en la orden: " + error))
    }

    return (
        <div className='checkout-msg'>
            <p>¡Gracias por su compra!</p>
            Id de compra: <span>{orderId}</span>
            <button onClick={updateOrder}>Actualizar Nº De orden</button>
            <NavLink exact="true" to="/" className="nav-link"><button>Seguir comprando</button></NavLink>
        </div>
    )
}

export default Checkout
