import './shoppingCart.css';
import MyNavBar from '../MyNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../redux/action';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import Footer from '../Footer';
import { addToQuantityAction, removeOfQuantityAction } from '../../redux/action';


const ShoppingCart = () => {

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch();
    const cartDetails = useSelector(state => state.cart.content);
    // const productQuantity = useSelector(state => Number(state.cart.quantity));
    // console.log(productQuantity)
    console.log(cartDetails)

    const allPrices = cartDetails.map(cart => Number(cart.price));
    console.log(allPrices)

    const evaluateTotalPrice = allPrices.reduce((accumulator, total) => accumulator + total, 0);




    return (
        <>
            <MyNavBar />
            <Container id="shoppingCart-container">
                <Row id="checkout-mainRow">
                    <Col sm={12} md={8} lg={8}>
                        <Row>
                            <Col>
                                <Table className="pb-3" responsive id="shoppingCart-table">
                                    <thead>
                                        <tr>
                                            <th>PRODUCT</th>
                                            <th>PRICE</th>
                                            <th>QTY</th>
                                            <th>TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody className="shoppingCart-tbody">
                                        {
                                            cartDetails.map(product => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <img src={product.image.img1} width="100" height="100" />
                                                        <div onClick={() => dispatch(removeFromCartAction(product))} id="remove-item">Remove item</div>
                                                    </td>
                                                    <td>€{product.price}</td>
                                                    <td>
                                                        <div className="shoppingCart-changeQuantity">
                                                            <span onClick={() => dispatch(removeOfQuantityAction())}>-</span> <span className="quantity">1</span><span onClick={() => dispatch(addToQuantityAction())}>+</span>
                                                        </div>
                                                    </td>
                                                    <td>€{product.price * 1}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={4} lg={4} id="checkout-col">
                        <h2 className="cart-order-summary">ORDER SUMMARY</h2>
                        <div id="shoopingCart-summaryDetalis">
                            <h5 className="mb-3">Items: <strong>{cartDetails?.length} items</strong></h5>
                            <h5 className="mb-5">Cart Total: <strong>€{evaluateTotalPrice}</strong></h5>
                            <Button variant="warning">Check Out</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ShoppingCart;