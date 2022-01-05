import SideBar from './sidebar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import AdminNavBar from './navbar/AdminNavBar';
import './admin.css';
import AdminHome from './home/AdminHome';

const Admin = () => {
    return (
        <Container fluid id='admin-container'>
            <Row>
                <AdminNavBar />
            </Row>
            <Row id='admin-secondRow'>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10}>
                    {/* <Row> */}
                        <AdminHome />
                    {/* </Row> */}
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Admin 