import { Navbar, Nav, FormControl, NavDropdown, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { getProductAction } from '../redux/action';
import { useDispatch } from 'react-redux';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';



const MyNavBar = () => {
    const [query, setQuery] = useState('');

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
            <Link to="/"><p className='mr-4 ml-0'>Vazi Vazi</p></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto gender">
                    <Link to="/women-collection"><span className='mr-2 text-white'>Women</span></Link>
                    <Link to="/men-collection"><span className='text-white'>Men</span></Link>
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
                    <Link to="/blog"><span className='text-white'>Blog</span></Link>
                    <Link to="/contact-us"><span className='mr-2 text-white'>Contact</span></Link>
                </Nav>
                <Nav>
                    {/* <Form className='mx-2' onSubmit={(e) => {
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
                    </Form> */}
                    <Link to='/register'><span className='mr-2 text-white'><SearchSharpIcon /></span></Link>
                    <Link to='/shopping-cart'><span className='mr-2 text-white'><ShoppingCartSharpIcon /></span></Link>
                    <Link to='/register'><span className='mr-2 text-white'><AccountCircleIcon /></span></Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar;


