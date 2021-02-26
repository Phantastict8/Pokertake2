import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import Casino from "./CasinoComponent";
import Aboutus from "./AboutUs";
import Navigation from "./Navi";
import Footer from "./FooterComponent";
import Resources from "./Resources";

class Main extends Component {
    render() {
        const HomePage = () => {
            return <Casino />;
        };

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/aboutus" render={() => <Aboutus component={Aboutus} />} />
                    <Route exact path="/constactus" render={() => <Aboutus component={Aboutus} />} />
                    <Route exact path="/resources" render={() => <Resources component={Resources} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
