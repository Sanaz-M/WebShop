import Pic1 from '../assets/register-photo1.jpg'
import { Jumbotron, Button, Container, ListGroup } from 'react-bootstrap'
import MyNavBar from './MyNavBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../redux/action';


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
      <MyNavBar />
      <Jumbotron id="Jumbotron1">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div>
        <img src={Pic1} height="300px" />
        <img src={Pic1} height="300px" className="mx-2" />
        <img src={Pic1} height="300px" />
      </div>
      <div>
        <img src={Pic1} height="300px" />
        <img src={Pic1} height="300px" className="mx-2" />
        <img src={Pic1} height="300px" />
      </div>

      <ListGroup as="ul">
                        {
                            productsResult.length > 0 && productsResult.map((product) => (

                                <ListGroup.Item
                                    key={product.id}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{product.category}</div>
                                        <div>{product.name}</div>
                                        <div className="date1">{product.price}</div>
                                    </div><hr />
                                </ListGroup.Item>


                            ))
                        }

                    </ListGroup>
    </Container>
  )
}

export default HomePage;