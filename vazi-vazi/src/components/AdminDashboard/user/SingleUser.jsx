import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const SingleUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const params = useParams();


    useEffect(() => {
        userInfo();
    }, [])

    const userInfo = async () => {
        let response = await fetch(`http://localhost:3000/users/${params.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        setUser(data)
    }

    const updateUser = async (e) => {
        e.preventDefault()
        let response = await fetch(`http://localhost:3000/users/` + user.id, {
            method: 'PUT',
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            alert('success')
        } else {
            alert('error')
        }
    }


    return (
        <Container fluid id="admin-singleUser-container">
            <Row className="justify-content-center p-5">
                <Col className="d-flex justify-content-center">
                    <Form className="admin-user-form" onSubmit={(e) => updateUser(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="name"
                                value={(user.name).toUpperCase()}
                                onChange={e => setUser({ ...user, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="text"
                                placeholder="Password"
                                value={user.password}
                                onChange={e => setUser({ ...user, password: e.target.value })}
                            />
                        </Form.Group>
                        <Button
                            className="admin-save-btn"
                            onClick={updateUser}
                            variant="primary"
                            type="submit"
                        >
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleUser;