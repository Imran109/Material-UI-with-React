import React from 'react';
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";
import BasicForm from "./Screens/BasicForm"
import Landing from "./landing/Landing"
import './App.css';
import HomeComponent from './filteringUI/HomeComponent';
import HeaderComponent from './menuheader/HeaderComponent';
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

function App() {
  return (
          <Router>
            <Styles>
              <Navbar expand="lg">
                <Navbar.Brand href="/">Mohamed Imran P S</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Item>
                      <Nav.Link>
                        <Link to="/assignmentpart1">Real Time Form Validation</Link>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link>
                        <Link to="/assignmentpart2">Video/Image auto-play carousel</Link>
                      </Nav.Link>
                    </Nav.Item>

                      <Nav.Item>
                        <Nav.Link>
                          <Link to="/assignmentpart3">UI Pop Out Filters</Link>
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
                  <Route path = "/assignmentpart1" exact = {true} component = {BasicForm}></Route>
                  <Route path = "/assignmentpart2" exact = {true} component = {Landing}></Route>
                  <Route path = "/assignmentpart3" exact = {true} component = {HomeComponent}></Route>
                  <Route path = "/assignmentpart4" exact = {true} component = {HeaderComponent}></Route>
          </Router>
  );
}
export default App;
