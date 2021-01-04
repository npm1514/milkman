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
  render(){
    const { switchDisplay, login } = this.props;
    const { email, password } = this.state;
    return (
      <LoginWrap>
        <a onClick={switchDisplay}><p>No login? Create an account</p></a>
        <h2>Log In</h2>
        <form onSubmit={(e) => {login(e, this.state)}}>
          <input
            placeholder="Email Address"
            type="email"
            value={email}
            autocomplete="on"
            onChange={(e) => {this.updateState(e, "email")}}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {this.updateState(e, "password")}}
          />
          <button type="submit">Log In</button>
        </form>
      </LoginWrap>
    );
  }
}

export default LoginComponent;
