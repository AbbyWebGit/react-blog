import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,BrowserRouter,Redirect } from 'react-router-dom'
import Add from "../add/add"
import List from "../list/list"
import Detail from '../detail/detail';



export default () => (
    <BrowserRouter>
      <Switch>
        <Route path="/main/list" component={List}/>
        <Route path="/main/add" component={Add}/>
        <Route path="/main/detail" component={Detail}/>
     </Switch>
    </BrowserRouter>
)