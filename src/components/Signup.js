import React, { Component } from 'react';
import { SignupWrap } from '../styled-components/components/signup';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class SignupComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      password1: "",
      password2: "",
      passwordMessage: "",
      currentCart: this.props.subscriptionID ? [this.props.subscriptionID] : []
    }
  }
  badPassword = (passwordMessage) => {
    let p1Border = document.getElementById('password1').style.border;
    let p2border = document.getElementById('password2').style.border;
    let bad = '1px solid red';
    this.setState({ passwordMessage })
  }
  signup = (e) => {
    e.preventDefault()
    const { firstName, lastName, email, password1, password2, phone, address, city, state, zip, currentCart } = this.state;
    if(password1 != password2){
      this.badPassword("Passwords do not match!");
    } else if(password1.length < 8){
      this.badPassword("Password must be at least 8 characters long");
    } else if(!/\d+/.test(password1)){
      this.badPassword("Password must contain at least 1 number");
    } else if(!/[a-zA-Z]/.test(password1)){
      this.badPassword("Password must contain at least one letter");
    } else {
      this.props.signup(e, { firstName, lastName, email, password: password1, phone, address, city, state, zip, currentCart })
    }
  }
  updateState = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj);
  }
  updatePassword = (e, prop) => {
    const { password1, password2 } = this.state;
    if(password1 == password2){
      document.getElementById('password1').style.border = '1px solid #8d8d8d';
      document.getElementById('password2').style.border = '1px solid #8d8d8d';
      this.setState({ passwordMessage: "" })
    }
    this.updateState(e,prop);
  }
  render(){
    const { switchDisplay } = this.props;
    const { firstName, lastName, email, password1, password2, phone, address, city, state, zip, passwordMessage } = this.state;
    return (
      <SignupWrap>
        <a onClick={switchDisplay}><p>Have an account? Log In Here</p></a>
        <h2>Create an Account</h2>
        <form onSubmit={this.signup}>
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            required
            onChange={(e) => {this.updateState(e, "firstName")}}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            required
            onChange={(e) => {this.updateState(e, "lastName")}}
          />
          <input
            placeholder="Phone"
            type="phone"
            value={phone}
            required
            onChange={(e) => {this.updateState(e, "phone")}}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            required
            onChange={(e) => {this.updateState(e, "email")}}
          />
          <input
            placeholder="Address"
            type="text"
            value={address}
            required
            onChange={(e) => {this.updateState(e, "address")}}
          />
          <input
            placeholder="City"
            type="text"
            value={city}
            required
            onChange={(e) => {this.updateState(e, "city")}}
          />
          <input
            placeholder="State"
            type="text"
            value={state}
            required
            onChange={(e) => {this.updateState(e, "state")}}
          />
          <input
            placeholder="Zip"
            type="text"
            value={zip}
            required
            onChange={(e) => {this.updateState(e, "zip")}}
          />
          <p>Password must...</p>
          <p>-contain at least 8 characters</p>
          <p>-contain at least 1 letter</p>
          <p>-contain at least 1 letter</p>
          <input
            id="password1"
            placeholder="Password"
            type="password"
            value={password1}
            required
            onChange={(e) => {this.updatePassword(e, "password1")}}
          />
          <input
            id="password2"
            placeholder="Re-Type Password"
            type="password"
            value={password2}
            required
            onChange={(e) => {this.updatePassword(e, "password2")}}
          />
          {
            passwordMessage &&
            <p style={{color: "red"}}>{passwordMessage}</p>
          }
          <button type="submit">Sign Up</button>
        </form>
        <a onClick={switchDisplay}><p>Have an account? Log In Here</p></a>
      </SignupWrap>
    );
  }
}

export default SignupComponent;
