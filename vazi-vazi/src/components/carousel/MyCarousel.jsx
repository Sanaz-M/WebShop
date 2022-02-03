import { Carousel } from 'react-bootstrap';

const MyCarousel = ({image, image1}) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${image}/800x400?text=First slide&bg=373940`}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${image1}/800x400?text=First slide&bg=373940`}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${image}/800x400?text=First slide&bg=373940`}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel;