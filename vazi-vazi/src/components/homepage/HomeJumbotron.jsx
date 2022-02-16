import { Jumbotron, Button, Row, Col } from 'react-bootstrap';



const HomeJumbotron = () => {
  return (
    <Row className="jumbo-row">
      <Col className="jumbo-col">
        <Jumbotron id="Jumbotron1">
          <div className="ml-5">
            <h1>Select Your New Perfect Style</h1>
            <p>
              A 100% cruelty-free shope
            </p>
          </div>
          <div id="jumbo-btn">
            <p>Do you want to know more?</p>
            <div><Button variant="outline-light" className="homeCollection-btn">EXPLORE NOW</Button></div>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  )
}

export default HomeJumbotron;