import { Navbar, Nav, FormControl, NavDropdown, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from '../assets/logo-w.png';
import { useState, useEffect } from 'react';
import { getProductAction } from '../redux/action';
import { useDispatch } from 'react-redux';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';



const MyNavBar = ({ query, onSubmit, searchChange, onChange }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductAction(query));
    }, [query]);

    return (
        <Navbar collapseOnSelect expand="lg" id="myNavbar">
            <div>
                <Link to="/"><img src={Logo} alt="logo" width='100' height='100' /></Link>
                <Link to="/"><p className='navbar-texts d-inline-block mr-4 ml-0' id="vazi-vazi">Vazi Vazi</p></Link>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto gender">
                    <Link to="/women-collection"><span className='mr-2 navbar-texts'>Women</span></Link>
                    <Link to="/men-collection"><span className='navbar-texts'>Men</span></Link>
                    <NavDropdown title="Collections" id="collasible-nav-dropdown">
                        <Link to='/action/3.1'>
                            <NavDropdown.Item><span>Bags</span></NavDropdown.Item>
                        </Link>
                        <Link to='/action/3.2'>
                            <NavDropdown.Item><span>Shoes</span></NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />

                    </NavDropdown>
                    <Link to="/"><span className='navbar-texts ml-2'>Blog</span></Link>
                    <Link to="/"><span className='ml-2 navbar-texts'>Contact</span></Link>
                </Nav>
                <Nav>
                    <Form className='mx-2' onSubmit={onSubmit}>
                        <Form.Group className="nav-form" ntrolId="formBasicEmail">
                            <Form.Control
                                className="d-none"
                                type="text"
                                placeholder="Search"
                                value={query}
                                onChange={searchChange}
                            />
                        </Form.Group>
                    </Form>
                    <Link to='/register'><span className='mr-2 navbar-texts'><SearchSharpIcon /></span></Link>
                    <Link to='/shopping-cart'><span className='mr-2 navbar-texts'><ShoppingCartSharpIcon /></span></Link>
                    <Link to='/register'><span className='mr-2 navbar-texts'><AccountCircleIcon /></span></Link>
                    <Form className='navbar-currency'>
                        <Form.Group className="nav-form" controlId="exampleForm.SelectCustomSizeSm">
                            <Form.Control as="select" size="sm" custom
                                onChange={onChange}
                            >
                                <option value='€'>Euro</option>
                                <option value='$'>Dollar</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar;


