import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview, Signup, Login } from '../components';
import { SignupLoginContent, SignupOrLoginWrap } from '../styled-components/pages/signuplogin';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class SignupLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggingIn: props.data.loggingIn,
      user: {},
      verified: false
    }
  }
  switchDisplay = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    })
  }
  signup = (e, obj) => {
    e.preventDefault();
    fetch('/api/signup', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      if(res.status === 200) return res.json();
      else if(res.status === 401) return { message: "Account already exists! Login."}
      else return {}
    })
    .then((data) => {
      console.log("auth response", data);
      if(data.message){
        alert(data.message);
      } else if(data._id){
        if(this.props.data.subscriptionID){
          this.setState({
            user: data
          }, () => {
            this.addSubscriptionToUser();
          })
        } else {
          window.location.href = "/myaccount"
        }
      }
    })
    .catch((err) => {
      console.log("login err", err);
    })
  }
  login = (e, obj) => {
    e.preventDefault();
    fetch('/api/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      if(res.status === 200) return res.json();
      else if(res.status === 401) return { message: "Incorrect email or password"}
      else return {}
    })
    .then((data) => {
      console.log("auth response", data);
      if(data.message){
        alert(data.message);
      } else if(data._id){
        if(this.props.data.subscriptionID){
          this.setState({
            user: data
          }, () => {
            this.addSubscriptionToUser();
          })
        } else {
          window.location.href = "/myaccount"
        }
      }
    })
    .catch((err) => {
      console.log("login err", err);
    })
  }
  addSubscriptionToUser = () => {
    let { user, user: { currentCart, _id }} = this.state;
    currentCart.push(this.props.data.subscriptionID);
    currentCart = [...new Set(currentCart)]
    fetch('/api/users/' + _id, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    })
    .then((res) => {
      if(res.status !== 200) throw Error(res.statusText);
      return res.json();
    })
    .then((response) => {
      console.log("update user", response);
      window.location.href = "/cart";
    })
  }
  componentDidMount(){
    fetch("/api/getMe")
      .then((response) => {
          if(response.status !== 200) throw Error(response.statusText);
          return response.json();
      }).then((user) => {
        if(user._id){
          window.location.href = "/myaccount";
        } else {
          this.setState({ user, verified: true })
        }
      }).catch(err => console.log("get me catch", err))
  }
  render(){
    const { subscription, subscriptionID } = this.props.data
    const { verified, user } = this.state;

    return (
        <PageWrapper>
            <Header user={user}/>
            <ContentWrapper>
              {
                verified &&
                <SignupLoginContent>
                  {
                    subscriptionID &&
                    <div>
                    <h2>Your Cart</h2>
                    <SubscriptionPreview subscription={subscription}/>
                    </div>
                  }
                  <SignupOrLoginWrap>
                  {
                    this.state.loggingIn ?
                    <Login switchDisplay={this.switchDisplay} login={this.login}/> :
                    <Signup switchDisplay={this.switchDisplay} signup={this.signup}/>
                  }
                  </SignupOrLoginWrap>
                </SignupLoginContent>
              }
            </ContentWrapper>
            <Footer/>
        </PageWrapper>
    );
  }
}

export default SignupLogin;
