import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';



const Product = ({ name, image, price, currency, id }) => {

    const evaluateTotal = () => currency === '€' ? price : parseInt(price) + 0.13 * price;

    return (
        <Col md={3}>
            <Card id="homepage-productCard">
                <Link to={`/details/${id}`}>
                    <Card.Img variant="top" src={image} height="400" alt="pt.shein.com" />
                    <Card.Body>
                        <Card.Title><div className="product-card">{name}</div><div className="product-card">{currency}{evaluateTotal()}</div></Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default Product;