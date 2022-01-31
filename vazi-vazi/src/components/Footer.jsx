import { Col, Container, Row } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import '../styles/footer.css';
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';




const Footer = () => {
    return (
        <Container fluid id="footer">
            <Row id="footer-first-row">
                <Col md={2} className="footer-cols">
                    <p className="footer-sectionHeading">CATEGORIES</p>
                    <Link to="/something">Men</Link>
                    <Link to="/something">Women</Link>
                    <Link to="/something">Bags</Link>
                    <Link to="/something">Shoes</Link>
                </Col>
                <Col md={2} className="footer-cols">
                    <p className="footer-sectionHeading">HELP</p>
                    <Link to="/something">Track Order</Link>
                    <Link to="/something">Returns</Link>
                    <Link to="/something">Shipping</Link>
                    <Link to="/something">FAQs</Link>
                </Col>
                <Col md={3} className="footer-cols">
                    <p className="footer-sectionHeading">GET IN TOUCH</p>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/something">About Us</Link>
                    <p className="footer-contactUs-details">Call us on (+1) 96 716 6879 or drop us
                        <br />a message on social media.</p>
                    <span className="footer-icons">
                        <a href='https://www.facebook.com/' target="_blank"><FacebookIcon className="icon" /></a>
                        <a href='https://www.instagram.com/' target="_blank"><InstagramIcon className="icon" /></a>
                        <a href='https://twitter.com/' target="_blank"><TwitterIcon className="icon" /></a>
                    </span>
                </Col>
                <Col md={2} className="footer-cols">
                    <p className="footer-sectionHeading">NEWSLETTER</p>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Email" />
                        <Button id='newsletter-btn' variant="contained">
                            SUBSCRIBE
                        </Button>
                    </form>

                </Col>
            </Row>

            <Row id="footer-second-row">
                    <p id="footer-last-line"> &copy; 2021-2022 Vazi Vazi, all rights reserved | Made with  <FavoriteIcon className='footer-heart-icon'/> by 
                    <a href='https://github.com/Sanaz-M' className="ml-1" target='_blank'>Sanaz</a></p>
            </Row>
        </Container>
    )
}

export default Footer;