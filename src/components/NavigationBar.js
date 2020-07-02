import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;
export const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Mohamed Imran P S</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/assignmentpart1">Real Time Validation Form</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/assignmentpart2">UI Pop Out Filters</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/assignmentpart3">Video/Image auto-play carousel</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/assignmentpart4">Motion Effects Menu Header</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>
)