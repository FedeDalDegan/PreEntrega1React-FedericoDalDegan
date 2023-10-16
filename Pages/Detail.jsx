import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from "../src/components/ItemList/ItemDetailContainer"
import { Card } from 'react-bootstrap'

const Detail = () => {

  const {id} = useParams()

  return (
    <div className='detail__flex--container'>
      <Card className='card--details'>
        <ItemDetailContainer id={id}/>
      </Card>
    </div>
  )
}

export default Detail
