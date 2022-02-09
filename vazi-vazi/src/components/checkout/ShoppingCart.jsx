import './shoppingCart.css';
import MyNavBar from '../MyNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../redux/action';
import { Container, Row, Col } from 'react-bootstrap';



const ShoppingCart = () => {

    const cartDetails = useSelector(state => state.cart.content)
    const dispatch = useDispatch()

    return (
        <Container id="shoppingCart-container">
            <Row>
                <MyNavBar />
            </Row>
            <Row id="anything11">
                <Col sm={12} md={6} lg={8}>
                    <Row><h1>List of items</h1></Row>
                    <Row>
                        <Col id="shoppingCart-productHeading">
                            <h6>PRODUCT</h6>
                            <h6>PRICE</h6>
                            <h6>QTY</h6>
                            <h6>TOTAL</h6>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            {
                                cartDetails.map(product => (
                                    <div key={product.id}>
                                        <div id='firstPart-procutDetails'>
                                            <img src={product.image.img1} width="100" height="100" />
                                            <span onClick={() => dispatch(removeFromCartAction(product))} id="remove-item">Remove item</span>
                                        </div>
                                        <div>{product.price}€</div>
                                        <div> - 1 +</div>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Row><h1>Checkout</h1></Row>

                </Col>
            </Row>
        </Container>
    )
}

export default ShoppingCart;