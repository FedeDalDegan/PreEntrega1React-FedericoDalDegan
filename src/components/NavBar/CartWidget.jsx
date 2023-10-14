import React from "react"
import UserContext from "../../context/userContext/userContext"

const CartWidget = () => {

    return (
        <div className="cart">
            <img src="https://cdn1.iconfinder.com/data/icons/material-core/20/shopping-cart-256.png" alt="" />
            <UserContext.Consumer>
                {
                    ({user}) => <p>Carrito de:   {user.name}</p>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CartWidget