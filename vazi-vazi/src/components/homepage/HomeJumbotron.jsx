import { Jumbotron, Button } from 'react-bootstrap';
import JumbotronVideo from '../../assets/shoe&bag.mp4';

const HomeJumbotron = () => {
    return (
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
    )
}

export default HomeJumbotron;