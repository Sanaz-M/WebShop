import { Navbar, Nav, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'


const MyNavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" id="myNavbar">
            <Link to="/"><img src={Logo} alt="logo" width='70' height='70'/></Link>
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
                    <Link to="/deets"><span>Blog</span></Link>
                    <Link eventKey={2} to="/memes"><span>Contact</span></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar


