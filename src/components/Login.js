import React, { Component } from 'react';
import { LoginWrap } from '../styled-components/components/login';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  updateState = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj);
  }
  login = (e) => {
    const { email, password } = this.state;
    e.preventDefault()
    fetch('/api/auth', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then((res) => res.text())
    .then((data) => {
      window.location.href = "/myaccount"
    })
  }
  render(){
    const { switchDisplay } = this.props;
    const { email, password } = this.state;
    return (
      <LoginWrap>
        <h2>Sign In</h2>
        <form onSubmit={this.login}>
          <input
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => {this.updateState(e, "email")}}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {this.updateState(e, "password")}}
          />
          <button type="submit">Sign In</button>
        </form>
        <a onClick={switchDisplay}>No login? Create an account</a>
      </LoginWrap>
    );
  }
}

export default LoginComponent;
