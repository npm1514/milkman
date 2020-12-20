import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview, Signup, Login } from '../components';
import { SignupLoginContent, SignupOrLoginWrap } from '../styled-components/pages/signuplogin';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class SignupLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggingIn: props.data.loggingIn,
      user: {}
    }
  }
  switchDisplay = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    })
  }
  componentDidMount(){
    fetch("/api/getMe")
      .then((response) => {
          if(response.status !== 200) throw Error(response.statusText);
          return response.json();
      }).then((user) => {
        console.log(user);
        if(user._id){
          window.location.href = "/myaccount";
        } else {
          this.setState({ user })
        }
      }).catch(err => console.log(err))
  }
  render(){
    let { subscription, subscriptionID } = this.props.data
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <SignupLoginContent>
                {
                  subscriptionID &&
                  <SubscriptionPreview subscription={subscription}/>
                }
                <SignupOrLoginWrap>
                {
                  this.state.loggingIn ?
                  <Login switchDisplay={this.switchDisplay} subscriptionID={subscriptionID}/> :
                  <Signup switchDisplay={this.switchDisplay} subscriptionID={subscriptionID}/>
                }
                </SignupOrLoginWrap>
              </SignupLoginContent>
            </ContentWrapper>
            <Footer/>
        </PageWrapper>
    );
  }
}

export default SignupLogin;
