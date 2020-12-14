import React, { Component } from 'react';
import { SignupOrLoginWrap } from '../styled-components/components/signuporlogin';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class SignupOrLoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggingIn: false
    }
  }
  render(){
    return (
      <SignupOrLoginWrap>
        { this.state.loggingIn ? "Login" : "Signup" }
      </SignupOrLoginWrap>
    );
  }
}

export default SignupOrLoginComponent;
