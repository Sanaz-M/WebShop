import { Navbar, Nav, Button, FormControl, NavDropdown, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { getProductAction } from '../redux/action';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"


const MyNavBar = () => {
    const [query, setQuery] = useState('');
    const params = useParams();


    const searchChange = (e) => {
        setQuery(e.target.value)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductAction(query));
    }, [query]);

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" id="myNavbar">
            <Link to="/"><img src={Logo} alt="logo" width='70' height='70' /></Link>
            {/* <Link to="/"><p>Vazi Vazi</p></Link> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/features"><span>Women</span></Link>
                    <Link to="/pricing"><span>Men</span></Link>
                    <NavDropdown title="Collections" id="collasible-nav-dropdown">
                        <Link to='/action/3.1'>
                            <NavDropdown.Item><span>Bags</span></NavDropdown.Item>
                        </Link>
                        <Link to='/action/3.2'>
                            <NavDropdown.Item><span>Shoes</span></NavDropdown.Item>
                        </Link>
                        <Link to='/action/3.3'>
                            <NavDropdown.Item><span>Something</span></NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />

                    </NavDropdown>
                </Nav>
                <Nav>
                    <Form className='mx-2' onSubmit={(e) => {
                        e.preventDefault()
                        dispatch(getProductAction(query))
                    }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={query}
                                onChange={searchChange}
                            />
                        </Form.Group>
                    </Form>
                    <Link to="/deets"><span>Blog</span></Link>
                    <Link eventKey={2} to="/memes"><span>Contact</span></Link>
                    <div>user</div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar


