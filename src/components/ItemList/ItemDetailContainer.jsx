import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore, getDoc, doc } from "firebase/firestore"
import cartContext from "../../context/cartContext/cartContext"

const ItemDetailContainer = ( { id }) => {
    const [item, setItem] = useState(null)
    const onAdd = (q) => {
        addItem(item, q)
    }

    const {addItem} = useContext(cartContext)

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db, "products", id)

        getDoc(itemRef)
            .then((snapshot) => {
                if(snapshot.exists()) {
                    setItem({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch((error)=>console.log(error))
    },[])

    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd}/>
            }
        </>
    )
}

export default ItemDetailContainer