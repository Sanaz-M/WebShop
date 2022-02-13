import { Carousel } from 'react-bootstrap';
import './myCarousel.css';


const MyCarousel = ({ image, image1 }) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 slides-photo"
          src={image}
          alt="First slide"
          height="700"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline w-100 slides-photo"
          src={image1}
          alt="Second slide"
          height="700"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel;