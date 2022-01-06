import './userlist.css'
import { Table } from 'react-bootstrap';
import SideBar from '../sidebar/SideBar';
import AdminNavBar from '../navbar/AdminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../../redux/action';
import { useEffect } from 'react';

const UserList = () => {

    const usersResult = useSelector(state => state.users.content);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);

    return (
        <div id="admin-userList">
            <AdminNavBar />
            <div>
                <SideBar />
            </div>
            <div>
                <Table striped bordered hover>
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
                        usersResult?.length>0 && usersResult.map((user) => (
                            <tr>
                                <td>1</td>
                                <td>{user.name}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default UserList