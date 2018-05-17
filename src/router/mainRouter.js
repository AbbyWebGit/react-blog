import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,BrowserRouter,Redirect } from 'react-router-dom'
import Add from "../add/add"
import List from "../list/list"



export default () => (
    <BrowserRouter>
      <Switch>
        <Route path="/main/list" component={List}/>
        <Route path="/main/add" component={Add}/>
     </Switch>
    </BrowserRouter>
)