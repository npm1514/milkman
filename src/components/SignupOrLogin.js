import React, { Component } from 'react';
import { Signup, Login } from './';
import { SignupOrLoginWrap } from '../styled-components/components/signuporlogin';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class SignupOrLoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggingIn: false
    }
  }
  switchDisplay = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    })
  }
  render(){
    return (
      <SignupOrLoginWrap>
        {
          this.state.loggingIn ?
          <Login switchDisplay={this.switchDisplay}/> :
          <Signup switchDisplay={this.switchDisplay}/>
        }
      </SignupOrLoginWrap>
    );
  }
}

export default SignupOrLoginComponent;
