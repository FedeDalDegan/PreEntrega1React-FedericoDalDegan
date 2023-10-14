import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import ItemList from "./ItemList"
import { getDocs, getFirestore, collection, } from 'firebase/firestore'

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const itemCollection = collection(db, "products")

    getDocs(itemCollection)
      .then(snapshot => {
        const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}))
        setItems(allData)
      })

  },[])

  return (
    <div>
      <Container>
        <Row>
            {
                items.length > 0 &&
                <ItemList items={items} />
            }
        </Row>
      </Container>
    </div>
  )
}

export default ItemListContainer