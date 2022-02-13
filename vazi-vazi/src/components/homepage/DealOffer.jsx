import { Row, Col } from 'react-bootstrap';
// import OfferPic from '../../assets/deal-product.png';
import OfferPic from '../../assets/deal1.png';
import CountDownClock from './CountDownClock';

const DealOffer = () => {
    return (
        <Row className='justify-content-center'>
            <Col sm={6} md={5} id="deal-description">
                <Col id="deal-text">
                <h3>DEAL OF THE WEAK</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>€80</p>
                </Col>
                <Col>
                    <CountDownClock />
                </Col>
            </Col>
            <Col sm={6} md={5} id="deal-photo">
                <div>
                    <img src={OfferPic} alt="..." height="450" />
                </div>
            </Col>
        </Row>
    )
}

export default DealOffer;