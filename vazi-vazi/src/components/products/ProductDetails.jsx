import MyNavBar from '../MyNavBar';
import './product.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import MyCarousel from '../carousel/MyCarousel';
import Rating from '@material-ui/lab/Rating';
import ProductSize from './ProductSize';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../../redux/action';
import Footer from '../Footer';
import ProductAccordion from './ProductAccordion';
import CommentArea from '../comments/CommentArea';



const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const [comments, setComments] = useState([]);
    const [image, setImage] = useState([]);
    const [currency, setCurrency] = useState('€');

    const params = useParams();
    const dispatch = useDispatch();

    const onChange = (e) => {
        setCurrency(e.target.value);
    };

    useEffect(() => {
        productInfo();
        getComments()
    }, []);

    const productInfo = async () => {
        let response = await fetch(`http://localhost:3000/products/${params.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        setProduct(data);
        setImage(data.image);
    }

    const getComments = async () => {
        let response = await fetch(`http://localhost:3000/comments`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const allTheComments = await response.json();
        const productComments = allTheComments.filter(comment => comment.commentId === params.id)
        setComments(productComments);
    }

    return (
        <div>
            <Container fluid>
                <Row><MyNavBar onChange={onChange} /></Row>
                <Row id="productDetails-container">
                    <Col sm={12} lg={8}>
                        <MyCarousel image={image.img1} image1={image.img2} />
                        <CommentArea comments={comments} />
                    </Col>
                    <Col sm={12} lg={4}>
                        <div className='px-3 py-1'>
                            <div><strong>{product.name}</strong></div>
                            <div id="product-rate">
                                <span><Rating name="half-rating-read" value={(comments.map(c => Number(c.rate)).reduce((accumulator, curr) => accumulator + curr, 0)) / comments.length} precision={0.5} readOnly /></span>
                                <a href="#product-comments" className='product-review-number'>({comments.length} Reviews)</a>
                            </div>
                            <div>{currency}{currency === "€" ? product.price :  parseInt(product.price) + 0.13 * parseInt(product.price).toFixed(2)}</div>
                            <div className="product-card mt-2">
                                <div className="mb-1">Select Size</div>
                                {product.category === "shoes" && <ProductSize />}
                            </div>
                            <div className="px-3">
                                <Button id='addtoBag-btn' variant="success" onClick={() => dispatch(addToCartAction(product))}>Add to Bag</Button>
                            </div>
                            <div md={3} id="crueltyFree-description">
                                <p>In the animal rights movement, cruelty-free is a label for products or activities that do not harm or kill animals anywhere in the world. Products tested on animals or made from animals are not considered cruelty-free, since these tests are often painful and cause the suffering and death of millions of animals every year.</p>
                            </div>
                            <ProductAccordion origin={product.origin} color={product.color} composition={product.composition} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default ProductDetails;