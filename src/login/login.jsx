import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {

    super(props);

    this.state = {

      // posts: {}

    };

  }
  login() {
    var name = document.getElementById("name").value;
    var pas = document.getElementById("pas").value;
    var formData=new FormData();
    formData.append("username",name);
    formData.append("password",pas);
    console.log(pas,name);

  }
  render() {
    return (
      <div className="login">
        <div>
          <span>用户名</span>
          <input id="name"/></div>

        <div>
          <span>密码</span>
          <input id="pas"/></div>
        <button onClick={this
          .login
          .bind(this)}>登录</button>

      </div>
    );
  }
}

export default Login;
