import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Aboutus from "./components/AboutUs";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;