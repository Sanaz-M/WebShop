import { Jumbotron, Button, Container, Form, Row, Col } from 'react-bootstrap'
import MyNavBar from './MyNavBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../redux/action';
import Footer from './Footer';
import JumbotronVideo from '../assets/shoe&bag.mp4'


const HomePage = () => {

  const [query, setQuery] = useState('');

  const productsResult = useSelector(state => state.products.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction(query));
  }, [query]);

  const searchChange = (e) => {
    setQuery(e.target.value)
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
      {/* sorting nav */}

      <Row>
        <Col md={2}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Control as="select" size="sm" custom>
                <option>choose currency</option>
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
                <Col className="m-1">
                  {/* className="d-flex justify-content-between align-items-start" */}

                  <div className="ms-2 me-auto" key={product.id}>
                    <div>
                      <img src={product.image} alt='shoe' width='300' height='300' /></div>
                  </div>
                  <div className="fw-bold">{product.category}</div>
                  <div>{product.name}</div>
                  <div className="date1">{product.price}</div>
                </Col>
              ))
            }

          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>

      </Row>
    </Container>
  )
}

export default HomePage;