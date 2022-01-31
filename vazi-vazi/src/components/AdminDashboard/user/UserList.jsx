import './userlist.css'
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import SideBar from '../sidebar/SideBar';
import AdminNavBar from '../navbar/AdminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../../redux/action';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


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

    const deletUser = async (id) => {
        try {
            let response = await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert("user deleted!");
            } else {
                alert("user NOT deleted!");
            }
        } catch (error) {
            alert("user NOT deleted!");
        }
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersResult?.length > 0 && usersResult.map((user) => (
                    
                                    <tr>
                                        <td>1</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <Link to={user.id}><Button variant="primary">Update</Button>
                                            </Link>
                                            <Button
                                                variant="danger"
                                                onClick={() => deletUser(user.id)}
                                             > Delete</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default UserList;