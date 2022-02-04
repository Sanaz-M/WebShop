import MyNavBar from '../MyNavBar';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import MyCarousel from '../carousel/MyCarousel';
import Rating from '@material-ui/lab/Rating';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const [comments, setComments] = useState([]);
    const [image, setImage] = useState([]);
    const params = useParams();

    const randomReviewNumber = Math.floor(Math.random() * 5000)

    useEffect(() => {
        productInfo();
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
        setComments(data.comments);
    }

    return (
        <div>
            <MyNavBar />
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <MyCarousel image={image.img1} image1={image.img2} />
                    </Col>
                    <Col md={4}>
                        <div>{product.name}</div>
                        <div id="product-reviews">
                            <span><Rating name="half-rating-read" value={Number(comments.rate)} precision={0.5} readOnly /></span>
                            <a href="#product-comments" className='product-review-number'>({randomReviewNumber} Reviews)</a>
                        </div>
                        <div>{product.color}</div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ProductDetails;