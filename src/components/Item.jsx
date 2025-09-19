import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    {prod.description}
                    <br />
                    <span style={{fontWeight:'bold', color:'green', fontSize:'18px'}}>${prod.price},00</span>
                </Card.Text>
                <Link className='btn btn-dark' to={`/item/${prod.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    )
}

export default Item;