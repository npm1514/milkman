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
  login = (e, obj) => {
    fetch('/api/auth', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log("auth response", data);
      if(this.props.data.subscriptionID){
        this.setState({
          user: data
        }, () => {
          this.addSubscriptionToUser();
        })
      } else {
        window.location.href = "/myaccount"
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
      // window.location.href = "/cart";
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
    const { verified } = this.state;
    return (
        <PageWrapper>
            <Header/>
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
                    <Signup switchDisplay={this.switchDisplay} login={this.login}/>
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
