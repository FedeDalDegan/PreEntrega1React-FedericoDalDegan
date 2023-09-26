import React from 'react'
import ItemListContainer from "../src/components/ItemList/ItemListContainer"
import { useParams } from 'react-router-dom'

const Home = () => {

    const params = useParams()
    console.log(params)

  return (
    <div>
      <ItemListContainer/>
    </div>
  )
}

export default Home