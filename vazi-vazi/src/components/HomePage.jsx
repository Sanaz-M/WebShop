import { Jumbotron, Button, Container, Form, Row, Col, Card, Modal } from 'react-bootstrap'
import MyNavBar from './MyNavBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../redux/action';
import Footer from './Footer';
import JumbotronVideo from '../assets/shoe&bag.mp4';
import Pagination from '@material-ui/lab/Pagination';
import womanCard from '../assets/homepage-photo2.jpg';
import Product from './Product';


const HomePage = () => {

  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState('€');
  const [price, setPrice] = useState([]);

  const productsResult = useSelector(state => state.products.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction(query));
  }, [query]);


  const onChange = (e) => {
    setCurrency(e.target.value)
  }


  return (
    <Container fluid className="homepage-main">
      <Row>
        <Col>
          <MyNavBar />

          <Jumbotron id="Jumbotron1">
            <video autoPlay muted loop id="jumbotronVideo">
              <source src={JumbotronVideo} type="video/mp4" />
            </video>
            <h1>Vazi Vazi</h1>

            <p>
              Your Style Assistant!
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>

      {/* main cards */}
      <Row id="main-card-row">
        <Col md={6} lg={4}>
          <Card className='main-first-cards' id='women-collection-card'>
            <Card.Body>
            </Card.Body>
            <div className='firstCard-text'>
              <Card.Text>
                Women's collection
              </Card.Text>
              <Button variant="primary" id='firstCards-btn'>Buy Now</Button>
            </div>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className='main-first-cards' id='off-collection-card'>
            <Card.Body>
            </Card.Body>
            <div>
              <Card.Text>
                discount
              </Card.Text>
              <Button variant="primary" id='firstCards-btn'>Buy Now</Button>
            </div>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className='main-first-cards' id='men-collection-card'>
            <Card.Body>
            </Card.Body>
            <div className='firstCard-text'>
              <Card.Text>
                Men's collection
              </Card.Text>
              <Button variant="primary" id='firstCards-btn'>Buy Now</Button>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* sorting nav */}
        <Col md={1}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="sm" custom
                onChange={onChange}
              >
                <option value='€'>Euro</option>
                <option value='$'>Dollar</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={3}>

        </Col>
      </Row>


      <Row>
        <Col>
          <Row>
            {
              productsResult?.length > 0 && productsResult.map((product) => (
                <Col className="m-1" key={product.id}>
                  {/* className="d-flex justify-content-between align-items-start" */}

                  <Product image={product.image} price={product.price} name={product.name} currency={currency} />
                </Col>
              ))
            }

          </Row>
          <Pagination count={10} className="home-pagination" />
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default HomePage;