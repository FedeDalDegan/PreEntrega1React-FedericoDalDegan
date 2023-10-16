import React, { useState } from 'react'
import CartContext from './cartContext'

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const addItem = (item, q) => {
        const existingItemIndex = cart.findIndex((el) => el.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += q;
            setCart(updatedCart);
        } else {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: q,
                },
            ]);
        }
    }
    
    const removeItem = (id) => {
        const newCart = cart.filter((el)=>el.id !== id)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
