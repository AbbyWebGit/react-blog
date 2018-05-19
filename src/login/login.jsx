import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import "./login.scss"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pas: "",

      btnDisable: true
    };

  }
  login() {
    var name = document.getElementById("name").value;
    var pas = document.getElementById("pas").value;
    var formData = new FormData();
    formData.append("username", name);
    formData.append("password", pas);

    this.props.history.push('/main/add');

  }
  change(type, e) {
    if (type == "name") {
      this.setState({user: e.target.value});
    } else {
      this.setState({pas: e.target.value});
    }
    if (this.state.user != "" && this.state.pas != "") {
      this.setState({btnDisable: false});

    }
  }
  render() {
    return (
      <div className="login">
        <h4 class="login-title">登录</h4>
        <div className="form">
          <input id="name" placeholder="请输入用户名" onChange={this.change.bind(this, "name")}
            className="name"/>
          <input id="pas" placeholder="请输入密码"  onChange={this.change.bind(this, "pas")}/>
        </div>
        <button onClick={this.login.bind(this)} disabled={this.state.btnDisable} className="loginBtn">登录</button>

      </div>
    );
  }
}

export default Login;
