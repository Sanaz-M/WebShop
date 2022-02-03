import MyNavBar from '../MyNavBar';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import MyCarousel from '../carousel/MyCarousel';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const [image, setImage] = useState([]);
    const params = useParams();

    useEffect(() => {
        productInfo();
    }, []);

    const productInfo = async () => {
        let response = await fetch(`http://localhost:3000/products/${params.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        setProduct(data)
        setImage(data.image)
    }

    return (
        <div>
            <MyNavBar />
            <Container>
                <Row>
                    <Col md={6}>
                        <MyCarousel image={image.img1} image1={image.img2} />
                    </Col>
                    <Col md={4}>
                    <div>{product.name}</div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ProductDetails;