import React from "react"

const ItemListContainer = ({ greeting }) => { // PROP llamado "greeting"
    return (
        <div className="itemListContainer">
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer