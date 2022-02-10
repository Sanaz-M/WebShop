import './shoppingCart.css';
import MyNavBar from '../MyNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../redux/action';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useState } from 'react';
import Footer from '../Footer';


const ShoppingCart = () => {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch();
    const cartDetails = useSelector(state => state.cart.content);

    const allPrices = cartDetails.map(cart => Number(cart.price))
    console.log(allPrices)
    const evaluateTotalPrice = allPrices.reduce((accumulator, total) => accumulator + total);


    const addToItem = () => {
        setQuantity(quantity + 1);
    };

    const minusTheItems = () => {
        setQuantity(quantity - 1);
    }

    return (
        <>
        <MyNavBar />
            <Container id="shoppingCart-container">
                <Row id="checkout-mainRow">
                    <Col sm={12} md={8} lg={8}>
                        <Row>
                            <Col>
                                <Table responsive id="shoppingCart-table">
                                    <thead>
                                        <tr>
                                            <th>PRODUCT</th>
                                            <th>PRICE</th>
                                            <th>QTY</th>
                                            <th>TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartDetails.map(product => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <img src={product.image.img1} width="100" height="100" />
                                                        <div onClick={() => dispatch(removeFromCartAction(product))} id="remove-item">Remove item</div>
                                                    </td>
                                                    <td>€{product.price}</td>
                                                    <td>
                                                        <RemoveCircleOutlineIcon onClick={minusTheItems} /> {quantity} <AddCircleOutlineIcon onClick={addToItem} />
                                                    </td>
                                                    <td>€{product.price}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={4} lg={4} id="checkout-col">
                        <h2>ORDER SUMMARY</h2>
                        <h4>Cart Total: {evaluateTotalPrice}</h4>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ShoppingCart;