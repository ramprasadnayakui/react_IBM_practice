import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import pClass from "./components/PracticeClass";
import pFunc from "./components/PracticeFunction";
import Home from "./components/Home";
import counter from "./components/startCounter";
import table from "./components/Table";
import reduxExa from "./components/reduxExa";
import hoc from "./components/hoc";
import thunk from "./components/thunk";
import fibonacci from "./components/Fibonacci"
import search from "./components/search"
import closure from "./components/closureExa"
import count from "./components/counter"
import extlib from "./components/ExternalLib"
import rucomps from "./components/RUcomps"
import formSubmit from "./components/formSubmit"
import usememo from "./components/UseMemos"


import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/PC1" component={pClass} />
                    <Route path="/PF1" component={pFunc} />
                    <Route path="/Counter" component={counter} />
                    <Route path="/Table" component={table} />
                    <Route path="/redux" component={reduxExa} />
                    <Route path="/hoc" component={hoc} />
                    <Route path="/thunk" component={thunk} />
                    <Route path="/fibonacci" component={fibonacci} />
                    <Route path="/search" component={search} />
                    <Route path="/closure" component={closure} />
                    <Route path="/count" component={count} />
                    <Route path="/extlib" component={extlib} />
                    <Route path="/rucomp" component={rucomps} />
                    <Route path="/formSubmit" component={formSubmit} />
                    <Route path="/usememo" component={usememo} />
                </Switch>
            </Router>
        )
    }
}