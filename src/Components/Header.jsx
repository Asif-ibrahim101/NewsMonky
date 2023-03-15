import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Outlet, Link } from "react-router-dom";

const Header = ()=>  {
    return (
      <>
        <Navbar bg="dark" className='sticky-top' variant='dark' expand="lg">
          <Container fluid>
            <Navbar.Brand to="/">NewsMonkey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className='nav-link' to="/">Home</Link>
                <Link to='/business' className='nav-link'>Business</Link>
                <Link to='/entertainment' className='nav-link'>Entertainment</Link>
                {/* <Link To='/general'>General</Link> */}
                <Link to='/health' className='nav-link'>Health</Link>
                <Link to='/science' className='nav-link'>Science</Link>
                <Link to='/sports' className='nav-link'>Sports</Link>
                <Link to='/technology' className='nav-link'>Technology</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Outlet/>
      </>
    )
}

export default Header