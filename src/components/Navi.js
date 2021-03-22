import React, { Component } from "react";
import {Nav, Navbar, NavbarBrand, NavbarToggler, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from "reactstrap";
import { NavLink } from "react-router-dom";
// import {Container, Row, Col} from 'react-bootstrap'; i dnt think we have react-bootstrap yet but ... i think we need this then use <Col xs={6} md={4}>

class Navigation extends Component {
    constructor(props){
        super(props);
        
        this.state= {
            isNavOpen: false,
            idModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin= this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault(); 
    }

    
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
                            <Nav navbar horizontal className="candy">
                                 <div className="row">
                                    <NavbarBrand href="/" to="home">
                                        PhantasticPoker
                                    </NavbarBrand>
                                    {/* <NavbarToggler onClick={this.toggleNav} /> */}
                                </div>
                                <div className='col'></div>
                                <div className="row">
                                    <div className="col">
                                        <NavLink
                                            href="/"
                                            to="/aboutus"
                                            className="nav-link">
                                            About Us
                                        </NavLink>
                                    </div>
                                    {/* <div className="col">
                                        <NavLink
                                            href="/"
                                            to="/contactus"
                                            className="nav-link">
                                            Contact Us
                                        </NavLink>
                                    </div> */}
                                    <div className="col">
                                        <NavLink
                                            href="/"
                                            to="/resources"
                                            className="nav-link">
                                            Resouces
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <button className="nav-link text-dark" outline onClick={this.toggleModal}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </Nav>
                        </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input=> this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input=> this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => (this.remember = input)}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Navigation;
