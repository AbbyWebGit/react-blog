import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'

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
  // console.log(pas,name);
   
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
        <div>
          <span>用户名</span>
          <input
            id="name"
            onChange={this.change.bind(this, "name")}/></div>

        <div>
          <span>密码</span>
          <input
            id="pas"
            onChange={this.change.bind(this, "pas")}/>
        </div>
        <button
          onClick={this
          .login
          .bind(this)}
          disabled={this.state.btnDisable}>登录</button>

      </div>
    );
  }
}

export default Login;
