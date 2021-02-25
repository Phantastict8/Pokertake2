import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

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
                <Navbar dark sticky="top">
                    <div className="container">
                        <Nav navbar horizontal>
                            <NavbarBrand href="/" to="home">
                                PhantasticPoker
                            </NavbarBrand>
                            <NavLink
                                href="/"
                                to="/aboutus"
                                className="nav-link">
                                About Us
                            </NavLink>
                            <NavLink
                                href="/"
                                to="/contactus"
                                className="nav-link">
                                Contact Us
                            </NavLink>
                            <NavLink
                                href="/"
                                to="/resources"
                                className="nav-link">
                                Resouces
                            </NavLink>
                            <button className="nav-link" className="dark">
                                Login
                            </button>
                        </Nav>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Navigation;
