
import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,BrowserRouter,Redirect } from 'react-router-dom'
import Login from '../login/login';
import Main from "../main/main"


export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
        </Switch>
    </BrowserRouter>
)