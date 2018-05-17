import React, {Component} from 'react';
import Toutes from '../router/mainRouter.js';
import {Switch, Route} from 'react-router-dom';
// import Add from "../add/add" 
// import List from "../list/list"

class Main extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">我是主页</h1>
                    <p>这是路由</p>
                    <div>
                        <Toutes/>
                        {/* <Switch>
                            <Route path={`${this.props.match.path}/add`} component={Add}/>
                            <Route path="/list" component={List}/>
                        </Switch> */}
                    </div>

                </header>

            </div>
        );
    }
}

export default Main;
