import React, { useEffect } from 'react'
import Counter from "../Counter/Counter"

const ItemDetail = ({ item }) => {
    return (
        <div className='detailled--card'>
            <h5 className='h5-card'>{item.title}</h5>
            <img className='img-card' src={item.image} />
            <span className='span-card'>Description: </span><p>{item.description}</p>
            <span className='span-card'>Price: </span><p>${item.price}</p>
            <span className='span-card'>Category: </span><p>{item.category}</p>
            <Counter />
        </div>
    )
}

export default ItemDetail