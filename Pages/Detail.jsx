import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from "../src/components/ItemList/ItemDetailContainer"
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Detail = () => {

  const {id} = useParams()

  return (
    <div className='detail__flex--container'>
      <Link to="/">
        <Button className='button--details'>
          <img src="https://cdn2.iconfinder.com/data/icons/pixel-game-1/52/pixel_house-256.png" alt="" className='button-img' />
        </Button>
      </Link>
      <Card className='card--details'>
        <ItemDetailContainer id={id}/>
      </Card>
    </div>
  )
}

export default Detail
