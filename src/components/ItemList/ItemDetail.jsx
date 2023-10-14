import React from 'react';
import Counter from "../Counter/Counter"
import "../../components/Counter/Counter.css";

const ItemDetail = ({ item, onAdd }) => {

  return (
    <div className='detailled--card'>
      <h5 className='h5-card'>{item.name}</h5>
      <img className='img-card' src={item.image} />
      <span className='span-card'>Description: </span><p>{item.desc}</p>
      <span className='span-card'>Category: </span><p>{item.category}</p>
      <span className='span-card'>Price: </span><p>${item.price}</p>
      <Counter onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetail;