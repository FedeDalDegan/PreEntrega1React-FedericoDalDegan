import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}className='mx-auto mt-5'>
            <Card.Body className='home__card'>
            <Card.Img variant="top" src={item.image}  style={{ height: '20%' }} className='card__img'/>
                <Card.Title className='card__title'>{item.title}</Card.Title>
                <Card.Text className='card__desc'>
                    {item.description}
                </Card.Text>
                <Link to={`/detalle/${item.id}`}>
                    <Button variant="primary">Show Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem