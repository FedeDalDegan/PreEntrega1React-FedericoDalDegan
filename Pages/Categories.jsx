import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const Categories = () => {

  const { category } = useParams();
  const [items, setItems] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const itemCollection = collection(db, "products",)
    
    // Filtros
    const gameFilter = (category) => {
      return query(itemCollection, where("category", "==", category));
    }

    let filterToApply;

    if(category === "Puzzle"){
      filterToApply = gameFilter("Puzzle")
    }else if (category === "RPG"){
      filterToApply = gameFilter("RPG")
    }else if (category === "Acción"){
      filterToApply = gameFilter("Acción")
    }else if (category === "Multijugador"){
      filterToApply = gameFilter("Multijugador")
    }else if (category === "Aventura"){
      filterToApply = gameFilter("Aventura")
    }else if (category === "Souls"){
      filterToApply = gameFilter("Souls")
    }else if (category === "Sandbox"){
      filterToApply = gameFilter("Sandbox")
    }else if (category === "Survival Horror"){
      filterToApply = gameFilter("Survival Horror")
    }else if (category === "Plataformas"){
      filterToApply = gameFilter("Plataformas")
    }

    getDocs(filterToApply)
      .then(snapshot => {
        const allData = snapshot.docs.map(document => ({id: document.id, ...document.data()}))
        setItems(allData)
      })
  },[category])

  return (
    <div className='categories__section'>
      <h2>Mostrando juegos: <span>{category}</span></h2>
      <div className="categories__card--container">
        {items.map((product) => (
          <Card key={product.id} className="card-categories">
            <Card.Body className='card-inner'>
              <Card.Img src={product.image} className='card-img-categories' />
              <Card.Title><h1 className='card-title-categories'>{product.name}</h1></Card.Title>
              <Card.Text className='card-desc-categories'>{product.category}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;