import SideBar from './sidebar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';

const Admin = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10}>
                    <h2>navbar</h2>
                    <h2>main body</h2>
                </Col>
            </Row>
            </Container>
    )
}

export default Admin 