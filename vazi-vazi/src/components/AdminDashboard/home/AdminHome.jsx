import '../home/adminHome.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Row, Col, Card } from 'react-bootstrap';
import Chart from './Chart';
import { userData } from '../../../dataForAdminChart'


const AdminHome = () => {
    return (
        <>
            {/* First part -- Cards */}
            <Row id='home-cards'>
                <Col ms={6} md={3}>
                    <Card className='adminHome-card'>
                        <Card.Body>
                            <Card.Title>Revanue</Card.Title>
                            <div className="card-bodyText mb-3">
                                <span>€5,233</span>
                                <span className="changeRate">-9.2
                                    <ArrowDownward className="chartIcon negative" />
                                </span>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Compared to last month</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col ms={6} md={3}>
                    <Card className='adminHome-card'>
                        <Card.Body>
                            <Card.Title>Sales</Card.Title>
                            <div className="card-bodyText mb-3">
                                <span>€10,415</span>
                                <span className="changeRate">-2.2
                                    <ArrowDownward className="chartIcon negative" />
                                </span>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Compared to last month</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col ms={6} md={3}>
                    <Card className='adminHome-card'>
                        <Card.Body>
                            <Card.Title>Cost</Card.Title>
                            <div className="card-bodyText mb-3">
                                <span>€5,182</span>
                                <span className="changeRate">+3.6
                                    <ArrowUpward className="chartIcon" />
                                </span>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Compared to last month</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col ms={6} md={3}>
                    <Card className='adminHome-card'>
                        <Card.Body>
                            <Card.Title>New Users</Card.Title>
                            <div className="card-bodyText mb-3">
                                <span>50</span>
                                <span className="changeRate">+1.7
                                    <ArrowUpward className="featuredIcon" />
                                </span>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Compared to last month</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Second part -- Chart */}
            <Row className="chart-secondRow">
                <Col>
                <div>Some Data and Info</div>
                    
                </Col>
                <Col>
                <div>Some Data and Info</div>
                    
                </Col>

            </Row>

            {/* Third part -- Chart */}
            <Row>
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            </Row>
        </>
    );
}

export default AdminHome