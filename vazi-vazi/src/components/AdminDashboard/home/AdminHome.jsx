import '../home/adminHome.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Row, Col, Card, Table, Badge, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import UserChart from './UserChart';
import { userData } from '../../../dataForAdminChart';
import ChannelPieChart from './ChannelPieChart';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useState } from 'react';


const AdminHome = () => {

    const [active, setActive] = useState({});


    return (
        <div id='admin-home-main'>
            {/* First part -- Cards */}
            <Row id='home-cards'>
                <Col sm={6} md={3}>
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
                <Col sm={6} md={3}>
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
                <Col sm={6} md={3}>
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
                <Col sm={6} md={3}>
                    <Card className='adminHome-card'>
                        <Card.Body>
                            <Card.Title>New Users</Card.Title>
                            <div className="card-bodyText mb-3">
                                <span>50</span>
                                <span className="changeRate">+1.7
                                    <ArrowUpward className="chartIcon" />
                                </span>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Compared to last month</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Second part -- Charts */}
            <Row className="chart-secondRow">
                <Col sm={12} lg={8}>
                    <UserChart data={userData} title="User Analytics" grid dataKey="Active User" year='2021' />
                </Col>
                <Col sm={12} lg={4}>
                    <Card id='adminHome-trafic'>
                        <Card.Body>
                            <Row>
                                <Card.Title>Trafic</Card.Title>
                            </Row>
                            <Row className="trafic-bodyText">
                                <Row>
                                    <ChannelPieChart />
                                </Row>
                                <Row>
                                    <div>12%<div className="communication-channel mr-2"><FiberManualRecordIcon className='greenDot' />Direct Search</div></div>
                                    <div>38%<div className="communication-channel mr-2"><FiberManualRecordIcon className='blueDot' />Facebook</div></div>
                                    <div>50%<div className="communication-channel mr-2"><FiberManualRecordIcon className='pinkDot' />Instagram</div></div>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

            {/* Third part -- some additional info */}
            <Row>
                <Col id='adminHome-order'>
                    <h2>Order Status</h2>
                    <h6>Latest Month</h6>
                    <Table responsive="sm">
                        <thead>
                            <tr id='adminTable-Heading'>
                                <th>Invoice</th>
                                <th>Customer</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10290</td>
                                <td>John Doe</td>
                                <td>London</td>
                                <td>€520</td>
                                <td><h4><Badge variant="primary">Open</Badge></h4></td>
                            </tr>
                            <tr>
                                <td>10291</td>
                                <td>Maria Flex</td>
                                <td>Lisbon</td>
                                <td>€260</td>
                                <td><h4><Badge variant="warning">Process</Badge></h4></td>
                            </tr>
                            <tr>
                                <td>10292</td>
                                <td>Flor Van Dijk</td>
                                <td>Amsterdam</td>
                                <td>€600</td>
                                <td><h4><Badge variant="success">Done</Badge></h4></td>
                            </tr>
                            <tr>
                                <td>10293</td>
                                <td>Marco Colombo</td>
                                <td>Rome</td>
                                <td>€305</td>
                                <td><h4><Badge variant="warning">Process</Badge></h4></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default AdminHome;