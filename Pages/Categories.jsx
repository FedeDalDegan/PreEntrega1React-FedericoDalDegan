import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import CardItem from "../src/components/ItemList/CardItem";

const Categories = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "products");

  // Filtros
  const gameFilter = (category) => {
    return query(itemCollection, where("category", "==", category));
  }

  let filterToApply;

  if (category === "Puzzle") {
    filterToApply = gameFilter("Puzzle");
  } else if (category === "RPG") {
    filterToApply = gameFilter("RPG");
  } else if (category === "Acción") {
    filterToApply = gameFilter("Acción");
  } else if (category === "Multijugador") {
    filterToApply = gameFilter("Multijugador");
  } else if (category === "Aventura") {
    filterToApply = gameFilter("Aventura");
  } else if (category === "Souls") {
    filterToApply = gameFilter("Souls");
  } else if (category === "Sandbox") {
    filterToApply = gameFilter("Sandbox");
  } else if (category === "Survival Horror") {
    filterToApply = gameFilter("Survival Horror");
  } else if (category === "Plataformas") {
    filterToApply = gameFilter("Plataformas");
  }

  getDocs(filterToApply)
    .then(snapshot => {
      const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }));
      setItems(allData);
    });
}, [category]);

return (
  <div className='categories__section'>
    <h2>Mostrando juegos: <span>{category}</span></h2>
    <div className="categories__card--container">
      {items.map((product) => (
        <CardItem item={product} key={product.id} />
      ))}
    </div>
  </div>
);
};

export default Categories;