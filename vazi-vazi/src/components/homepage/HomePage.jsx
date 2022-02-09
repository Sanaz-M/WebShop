import { Button, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import MyNavBar from '../MyNavBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../../redux/action';
import Footer from '../Footer';
import Product from '../products/Product';
import HomeJumbotron from './HomeJumbotron';


const HomePage = () => {

  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState('€');

  const productsResult = useSelector(state => state.products.result);
  const dispatch = useDispatch();
  
  const filterWomenProducts = () => {
    return productsResult.filter(product => product.design === "woman")
}

const filterMenProducts = () => {
  return productsResult.filter(product => product.design === "men").slice(0,4)
}


  useEffect(() => { 
    dispatch(getProductAction(query));
  }, [query]);


  const onChange = (e) => { 
    setCurrency(e.target.value)
  };

  const changeQuery = (e) => {
    setQuery(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductAction(query))
  };

  return (
    <>
      <Container fluid className="homepage-main">
        <Row>
          <Col>
            <MyNavBar onSubmit={onSubmit} query={query} searchChange={changeQuery} onChange={onChange} />
            <HomeJumbotron />
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
          <Col md={3}>

          </Col>
        </Row>
        <Row className="suggestion-for">SUGGESTIONS FOR WOMEN</Row>
        <Row className="homepage-productCards-row">
          <Col md={12}>
            <Row>

              {
                productsResult?.length > 0 && filterWomenProducts().map((product) => (

                  <Product
                    key={product.id}
                    id={product.id}
                    image={product.image.img1}
                    price={product.price}
                    name={product.name}
                    currency={currency} />

                ))
              }
            </Row>
          </Col>
        </Row>
        <Row className="suggestion-for">SUGGESTIONS FOR MEN</Row>
        <Row className="homepage-productCards-row">
          <Col md={12}>
            <Row>
              {
                productsResult?.length > 0 && filterMenProducts().map((product) => (

                  <Product
                    key={product.id}
                    id={product.id}
                    image={product.image.img1}
                    price={product.price}
                    name={product.name}
                    currency={currency} />
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default HomePage;