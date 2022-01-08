import './userlist.css'
import { Container, Col, Row, Table } from 'react-bootstrap';
import SideBar from '../sidebar/SideBar';
import AdminNavBar from '../navbar/AdminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../../redux/action';
import { useEffect, useState } from 'react';

const UserList = () => {

    const [userQuery, setUserQuery] = useState('')
    const usersResult = useSelector(state => state.users.content);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAction(userQuery));
    }, [userQuery]);

    const searchChange = (e) => {
        setUserQuery(e.target.value)
      }

    return (
        <Container fluid id='admin-userList'>
            <Row>
                <AdminNavBar />
            </Row>
            <Row id='user-secondRow'>
                <Col sm={6} md={3} lg={2}>
                    <SideBar />
                </Col>
                <Col sm={6} md={9} lg={10} className='mainSec-home'>
                    <Table striped bordered hover className='admin-userlist-table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersResult?.length > 0 && usersResult.map((user) => (
                                    <tr>
                                        <td>1</td>
                                        <td>{user.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        // <div id="admin-userList">
        //     <div>
        //         <SideBar />
        //     </div>
        //     <div>
        //     <AdminNavBar />
        //         <Table striped bordered hover className='admin-userlist-table'>
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th>First Name</th>
        //                     <th>Last Name</th>
        //                     <th>Username</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                 usersResult?.length>0 && usersResult.map((user) => (
        //                     <tr>
        //                         <td>1</td>
        //                         <td>{user.name}</td>
        //                     </tr>
        //                 ))
        //                 }
        //             </tbody>
        //         </Table>
        //     </div>
        // </div>
    )
}

export default UserList