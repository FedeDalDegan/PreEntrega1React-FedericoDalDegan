import React from "react"

const ItemListContainer = ({ greeting }) => { // PROP llamado "greeting"
    return (
        <div className="itemListContainer">
            <p className="text-pop-up-top">{greeting}</p>
        </div>
    )
}

export default ItemListContainer