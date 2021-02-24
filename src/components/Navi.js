import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavLink, Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render () {
        return (
            <>
                    <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img height="400px" width="1000px" src="assets/images/phanpokerlogo.jpg"/>
                            </div>
                        </div>
                    </div>
                    </Jumbotron>
                    <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">PhantasticPoker</NavbarBrand>
                        <NavLink className="nav-link"><Link className="nav-link" target="_blank">About Us</Link></NavLink>
                        <NavLink className="nav-link">Contact Us</NavLink>
                        <NavLink className="nav-link">Resouces</NavLink>
                        <NavLink className="nav-link"><button className="nav-link" className="dark">Login</button></NavLink>
                    </div>
                    </Navbar>
            </>
        );
    };
}

export default Navigation;