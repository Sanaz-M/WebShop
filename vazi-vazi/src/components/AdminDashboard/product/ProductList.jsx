import '../user/userlist.css';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import SideBar from '../sidebar/SideBar';
import AdminNavBar from '../navbar/AdminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../../redux/action';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getProductAction } from '../../../redux/action';

const ProductList = () => {

    const [query, setQuery] = useState('')
    const productResult = useSelector(state => state.products.result);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductAction(query));
    }, [query]);

    const searchChange = (e) => {
        setQuery(e.target.value)
    }

    const deletProduct = async (id) => {
        try {
            let response = await fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert("product deleted!");
            } else {
                alert("product NOT deleted!");
            }
        } catch (error) {
            alert("product NOT deleted!");
        }
    }
    return (
        <Container fluid id='admin-producrList'>
            <Row>
                <AdminNavBar />
            </Row>
            <Row id='product-secondRow'>
                <Col sm={6} md={3} lg={2}>
                    <SideBar />
                </Col>
                <Col sm={6} md={9} lg={10} className='mainSec-home'>
                    <Table striped bordered hover className="product-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productResult?.length > 0 && productResult.map((product) => (
                    
                                    <tr className="dashboard-tableRow">
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>€{product.price}</td>
                                        <td>
                                            <Link to={product.id}><Button className="update-btn">Update</Button>
                                            </Link>
                                            <Button
                                                className="dashboard-deleteBtn"
                                                onClick={() => deletProduct(product.id)}
                                             > Delete</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList;