import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../../components/ItemList/ItemListContainer.css"

const CardItem = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}className='mx-5 mt-5'>
            <Card.Body className='home__card'>
            <Card.Img variant="top" src={item.image} className='card__img'/>
                <Card.Title className='card__title'>{item.name}</Card.Title>
                <Card.Text className='card__desc'>
                    {item.desc}
                </Card.Text>
                <Link to={`/detalle/${item.id}`}>
                    <Button variant="primary">+ Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem