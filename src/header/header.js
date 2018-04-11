import React from 'react';
import './header.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component {
   render() {
      return (
         <Navbar fixedTop inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home">PT</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem>
                  <Link to="/about">About Me</Link>
                </NavItem>
                <NavItem>
                  <Link to="/skill">Skills</Link>
                </NavItem>
                <NavItem>
                  <Link to="/work">Work</Link>
                </NavItem>
                <NavItem>
                  <Link to="/education">Education</Link>
                </NavItem>
                <NavItem>
                  <Link to="/gallery">Gallery</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact Me</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
   }
}

export default Header;