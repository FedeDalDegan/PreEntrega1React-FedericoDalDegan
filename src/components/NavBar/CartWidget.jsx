import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"

const CartWidget = () => {
    return (
        <div style={CartStlye}>
            <AiOutlineShoppingCart /> <span>0</span>
        </div>
    )
}

const CartStlye = { /* Cart style */
    fontSize: 15,
}

export default CartWidget