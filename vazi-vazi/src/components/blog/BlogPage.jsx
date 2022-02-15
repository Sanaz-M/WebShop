import { Row, Col, Card } from 'react-bootstrap';
import './blogPage.css';


const BlogPage = () => {
    return (
        <>
            <Col sm={4} md={4}>
                <Card className="blog-cards">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1439158771502-46975f6e44e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" height="300" />
                    <Card.Body>
                        <Card.Title className="blog-title">Women Fashion</Card.Title>
                        <Card.Text className="blog-text">
                        Dressing and explore new sartorial possibilities with our versatile picks.
                        </Card.Text>
                        <a href="#" className="blog-text">Read More</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4} md={4}>
            <Card className="blog-cards">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" height="300" />
                    <Card.Body>
                        <Card.Title className="blog-title">Cruelty Free Products</Card.Title>
                        <Card.Text className="blog-text">
                       Products or activities that do not harm or kill animals anywhere in the world.
                        </Card.Text>
                        <a href="#" className="blog-text">Read More</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={4} md={4}>
            <Card className="blog-cards">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1483335584694-fb0f729b0f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" height="300" />
                    <Card.Body>
                        <Card.Title className="blog-title">Men Fashion</Card.Title>
                        <Card.Text className="blog-text">
                        At Menfashion we give fashion forward men, You can always be confident.
                        </Card.Text>
                        <a href="#" className="blog-text">Read More</a>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
};

export default BlogPage;