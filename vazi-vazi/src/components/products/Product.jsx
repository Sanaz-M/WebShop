import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import './product.css';


const Product = ({ name, image, price, currency, id }) => {

    const evaluateTotal = () => currency === '€' ? price : parseInt(price) + 0.13 * price;

    return (
        <Col sm={6} md={4} lg={3}>
            <Link to={`/details/${id}`}>
                <Card key={id} id="homepage-productCard">
                    <Card.Img variant="top" src={image} height="400" alt="..." style={{objectFit: "cover"}}/>
                    <Card.Body className="product-card">
                        <Card.Title><div className="product-card">{name}<br />{currency}{evaluateTotal()}</div></Card.Title>
                    </Card.Body>

                </Card>
            </Link>
        </Col>
    )
}

export default Product;