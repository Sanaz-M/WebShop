import React from "react";
import "./adminNavBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../assets/logo-w.png';
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <Navbar fixed="top" id='admin-navbar'>
      {/* <Link to="/"><h2>Vazi Vazi</h2></Link> */}
      {/* <Link to="/"><img src={Logo} alt="logo" width='70' height='70' /></Link> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <div className="navRight">
          <div className="navbarIcon">
            <NotificationsNone />
            <span className="iconBadge">4</span>
          </div>
          <div className="navbarIcon">
            <Settings />
          </div>
          <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="avatar" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavBar