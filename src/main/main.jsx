import React, {Component} from 'react';
import Toutes from '../router/mainRouter.js';
import {Switch, Route} from 'react-router-dom';
import "./main.scss"

class Main extends Component {
    render() {
        return (
            <div className="main">
                <header className="main-header">
                <div className="header-wrap clearfix">
                    <div className="logo">
                        <img src={require('../images/logo.jpg')} alt=""/>
                        <span className="main-name">博客</span>
                    </div>
                    
                    <div className="user">  <img src={require('../images/user.png')} alt=""/></div>
                </div>
                </header>
                <div className="main-content">
                    <div>
                        <Toutes/>

                    </div>

                </div>
                <div className="main-bottom"></div>

            </div>
        );
    }
}

export default Main;
