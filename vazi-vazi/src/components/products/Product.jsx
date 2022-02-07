import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import './product.css';




const Product = ({ name, image, price, currency, id }) => {

    const evaluateTotal = () => currency === '€' ? price : parseInt(price) + 0.13 * price;

    return (
        <Col sm={12} md={4} lg={3}>
            <Card id="homepage-productCard">
                <Link to={`/details/${id}`}>
                    <Card.Img variant="top" src={image} height="400" alt="pt.shein.com" />
                    <Card.Body className="product-card">
                        <Card.Title><div className="product-card">{name}<br />{currency}{evaluateTotal()}</div></Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default Product;