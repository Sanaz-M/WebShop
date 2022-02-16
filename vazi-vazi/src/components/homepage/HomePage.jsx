import { Button, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import MyNavBar from '../MyNavBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../../redux/action';
import Footer from '../Footer';
import Product from '../products/Product';
import HomeJumbotron from './HomeJumbotron';
import DealOffer from './DealOffer';
import BlogPage from '../blog/BlogPage';


const HomePage = () => {

  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState('€');

  const productsResult = useSelector(state => state.products.result);
  const dispatch = useDispatch();


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
      <MyNavBar onSubmit={onSubmit} query={query} searchChange={changeQuery} onChange={onChange} />
      <Container fluid className="homepage-main">
            <HomeJumbotron />
            
        {/* main cards */}
        <Row id="homeCollection-mainRow">
          <Col>
            <Row id="women-collection-row">
              <Col sm={10} md={5}>
                <img id="women-collection-image" variant="top" src="https://images.unsplash.com/photo-1566958799193-c2aa57a835d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80" />
              </Col>
              <Col sm={4} md={6}>
                <div>
                  <h3 className="homeCollection-name">Women Collection</h3>
                  <p className="homeCollection-text">Elegant and high-quality bags and shoes<br /> 100% cruelty-free and environmentally friendly.</p>
                </div>
                <div>
                  <Button variant="outline-dark" className="homeCollection-btn">EXPLORE NOW</Button>
                </div>
              </Col>
            </Row>
            <Row id="men-collection-row">
              <Col sm={10} md={5}>
                <img id="men-collection-image" variant="top" src="https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </Col>
              <Col sm={4} md={6} id="men-collection-details">
                <div>
                  <h3 className="homeCollection-name">Men Collection</h3>
                  <p className="homeCollection-text">Elegant and high-quality bags and shoes<br /> 100% cruelty-free and environmentally friendly.</p>
                </div>
                <div>
                  <Button variant="outline-dark" className="homeCollection-btn">EXPLORE NOW</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Deal of the weak part */}
        {/* <Row id="dealOfWeak-row"> */}
        <DealOffer />
        {/* </Row> */}


        {/* Row of Products- Popular products */}
        <Row className="suggestion-for mt-5"><span>POPULAR PRODUCTS</span></Row>
        <Row className="homepage-productCards-row">
          <Col md={12}>
            <Row>

              {
                productsResult?.length > 0 && productsResult.slice(0, 8).map((product) => (

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
        <Row className="suggestion-for"><span>BLOG</span></Row>
        <Row className="blog-row">
          <Col md={10}>
            <Row><BlogPage /></Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default HomePage;