import React, {Component} from 'react';
import Toutes from '../router/mainRouter.js';
import {Switch, Route} from 'react-router-dom';
import "./main.scss"

class Main extends Component {
    render() {
        return (
            <div className="main">
                <header className="main-header">
                    <div className="logo">
                        <img src={require('../images/logo.jpg')} alt=""/>
                    </div>

                    <div className="user"></div>

                    <h1 className="App-title">我是主页</h1>
                    <p>这是路由</p>
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
