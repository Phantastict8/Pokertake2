import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Casino from './CasinoComponent';
import Aboutus from './AboutUs';
import Navigation from './Navi';
import Footer from './FooterComponent';

class Main extends Component { 
    render() {
            return (
            <div>
                <Navigation/>
                <Casino />
                        <Switch>
                            <Route path="/aboutus"/>
                            <Route
                                exact
                                path="/aboutus"
                                render={() => (<Aboutus/>
                                )}
                            />
                            
                            <Redirect to="/home" />
                        </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;