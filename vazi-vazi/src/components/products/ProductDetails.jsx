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
import { getCommentsAction } from '../../redux/action';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const [image, setImage] = useState([]);
    const commentsResult = useSelector(state => state.comments.content);

    const dispatch = useDispatch();
    const params = useParams();
    const randomReviewNumber = Math.floor(Math.random() * 5000)

    const filterCommentList = () => {
        return commentsResult.filter(comment =>comment.commentId === product.id)
    }

    useEffect(() => {
        productInfo();
        dispatch(getCommentsAction());
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

    return (
        <div>
            <div>
                <MyNavBar />
            </div>
            <div>
                <Container fluid id="productDetails-container">
                    <Row><MyNavBar /></Row>
                    <Row>
                        <Col md={8}>
                            <MyCarousel image={image.img1} image1={image.img2} />
                        </Col>
                        <Col md={4}>
                            <div className='px-3 py-1'>
                                <div>{product.name}</div>
                                <div id="product-rate">
                                    <span><Rating name="half-rating-read" value={Number(commentsResult.rate)} precision={0.5} readOnly /></span>
                                    <a href="#product-comments" className='product-review-number'>({randomReviewNumber} Reviews)</a>
                                </div>
                                <div>{product.color}</div>
                                <div>{product.price}</div>
                                <div className="product-card mt-2"><div className="mb-1">Select Size</div><ProductSize /></div>
                                <div className="px-3">
                                    <Link to="/shopping-cart"><Button id='addtoBag-btn' variant="success">Add to Bag</Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div>{filterCommentList().map((comment) => (
                        <div>{comment.comment}</div>
                    ))}</div>
                </Container>
            </div>
         </div>
    )
}

export default ProductDetails;