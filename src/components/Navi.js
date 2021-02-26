import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";
// import {Container, Row, Col} from 'react-bootstrap'; i dnt think we have react-bootstrap yet but ... i think we need this then use <Col xs={6} md={4}>

class Navigation extends Component {
    render() {
        return (
            <>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img
                                    height="400px"
                                    width="1000px"
                                    src="assets/images/phanpokerlogo.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                            <Nav navbar horizontal>
                                 <div className="row">
                                    <NavbarBrand href="/" to="home">
                                        PhantasticPoker
                                    </NavbarBrand>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <NavLink
                                            href="/"
                                            to="/aboutus"
                                            className="nav-link">
                                            About Us
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <NavLink
                                            href="/"
                                            to="/contactus"
                                            className="nav-link">
                                            Contact Us
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <NavLink
                                            href="/"
                                            to="/resources"
                                            className="nav-link">
                                            Resouces
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <button className="nav-link" className="dark">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </Nav>
                        </div>
                </Navbar>
            </>
        );
    }
}

export default Navigation;
