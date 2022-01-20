import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const SingleUser = () => {
    const [users, setUsers] = useState([]);
    const params = useParams();


    useEffect(() => {
        userInfo();
    }, [])

    const userInfo = async () => {
        let response = await fetch(`http://localhost:3000/users?name=${params.userName}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

    const updateUser = async () => {
        let response = await fetch(`http://localhost:3000/users?name=${params.userName}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        setUsers({
            name: data.name,
            email: data.email,
            password: data.password
        })
    }


    return (
        <div>
            {users?.length > 0 && users.map((user) => (
                <Form onSubmit={(e) => updateUser(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="name"
                            value={(user.name).toUpperCase()}

                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={user.email}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="text"
                            placeholder="Password"
                            value={user.password}
                        />
                    </Form.Group>
                    <Button
                        onClick={updateUser}
                        variant="primary"
                        type="submit"
                    >
                        Save
                    </Button>
                </Form>
            ))}
        </div>
    )
}

export default SingleUser