// TRES HORAS SOLAMENTE PARA HACER UN FILTER DE CATEGORY T-T
import React, { useState, useEffect } from 'react';

const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;