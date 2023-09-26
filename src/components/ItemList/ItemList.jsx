import React from 'react'
import { Col } from 'react-bootstrap';
import CardItem from './CardItem';

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={4} sm={12} key={item.id} >
                        <CardItem item={item} />
                    </Col>
                ))
            }
        </>
    )
}

export default ItemList