import '../home/adminHome.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Row, Col, Card } from 'react-bootstrap';
import UserChart from './UserChart';
import { userData } from '../../../dataForAdminChart';
import ChannelPieChart from './ChannelPieChart';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


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

            {/* Second part -- Charts */}
            <Row className="chart-secondRow">
                <Col md={8}>
                <UserChart data={userData} title="User Analytics" grid dataKey="Active User" />
                </Col>
                <Col md={4}>
                    <Card id='adminHome-trafic'>

                        <Card.Body>
                            <Row>
                                <Card.Title>Trafic</Card.Title>
                                <ChannelPieChart />
                            </Row>
                            <Row className="trafic-bodyText">
                            <Col md={4}>
                                    <div>12%<div className="communication-channel mr-2"><FiberManualRecordIcon className='greenDot' />Direct Search</div></div>
                                </Col>
                                <Col md={4}>
                                    <div>38%<div className="communication-channel mr-2"><FiberManualRecordIcon className='blueDot' />Facebook</div></div>
                                </Col>
                                <Col md={4}>
                                    <div>50%<div className="communication-channel mr-2"><FiberManualRecordIcon className='pinkDot' />Instagram</div></div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

            {/* Third part -- some additional info */}
            <Row>
                {/* <Card id='adminHome-order'>
                        <Card.Body>
                            <Card.Title>Order Status</Card.Title>
                            <div className="card-bodyText mb-3">
                                <span>50</span>
                                <span className="changeRate">+1.7
                                    <ArrowUpward className="featuredIcon" />
                                </span>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Compared to last month</Card.Subtitle>
                        </Card.Body>
                    </Card> */}

            </Row>
        </>
    );
}

export default AdminHome