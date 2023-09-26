import React from 'react'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import ItemList from "./ItemList"
import useFetch from "../../Hooks/useFetch"

const ItemListContainer = () => {

  const [items] = useFetch("https://fakestoreapi.com/products")
    console.log(items)

  return (
    <div>
      <Container>
        <Row>
            {
                items !== null &&
                <ItemList items={items} />
            }
        </Row>
      </Container>
    </div>
  )
}

export default ItemListContainer