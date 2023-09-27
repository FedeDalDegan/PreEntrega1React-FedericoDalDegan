import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Categories = () => {

  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
  }, [category])

  return (
    <div className='categories__section'>
      <h2>{category} Products</h2>
      <div className="categories__card--container">
        {products.map((product) => (
          <Card key={product.id} className="card-categories">
            <Card.Body>
              <Card.Img src={product.image} className='card-img-categories' />
              <Card.Title><h1 className='card-title-categories'>{product.title}</h1></Card.Title>
              <Card.Text className='card-desc-categories'>{product.description}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;