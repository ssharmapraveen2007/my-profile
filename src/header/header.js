import React from 'react';
import './header.css';
import { Navbar, Nav, ul, li } from 'react-bootstrap';
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
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/about">About Me</Link>
                </li>
                <li>
                  <Link to="/skill">Skills</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
      );
   }
}

export default Header;