import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contacts from './pages/Contacts'
import PageNotFound from './pages/PageNotFound'

import { 
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Router>
        <div >
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
            <Navbar.Brand>
              <h1>Ko</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
              <Nav>
                <NavItem style={{marginLeft: '5%'}}>
                  <Link to="/">Home </Link>
                </NavItem>
                <NavItem style={{marginLeft: '5%'}}>
                  <Link to="/about">About </Link>
                </NavItem>
                <NavItem style={{marginLeft: '5%'}}>
                  <Link to="/skills">Skills </Link>
                </NavItem>
                <NavItem style={{marginLeft: '5%'}}>
                  <Link to="/work">Portfolios </Link>
                </NavItem>
                <NavItem style={{marginLeft: '5%'}}>
                  <Link to="/contacts">Contacts</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/contacts" component={Contacts} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
