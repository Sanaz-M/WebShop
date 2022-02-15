import { Row, Col } from 'react-bootstrap';
// import OfferPic from '../../assets/deal-product.png';
import OfferPic from '../../assets/deal1.png';
import CountDownClock from './CountDownClock';

const DealOffer = () => {
    return (
        <Row id="dealOfWeak-row" className='justify-content-center p-2'>
            <Col sm={6} md={6} id="deal-description">
                <div id="deal-text">
                        <h3 className="deal-text-align"><strong>DEAL OF THE WEAK</strong></h3>
                        <div id="border-botton"></div>
                        <h5 className="deal-text-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    
                    <div className="justify-content-center deal-price"><p>€80</p></div>
                </div>
                <div>
                    <CountDownClock />
                </div>
            </Col>
            <Col sm={6} md={6} id="deal-photo">
                <div>
                    <img src={OfferPic} alt="..." height="400" />
                </div>
            </Col>
        </Row>
    )
}

export default DealOffer;