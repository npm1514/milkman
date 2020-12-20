import React, { Component } from 'react';
import { Header, Footer, OrderPreview, Signup, Login } from '../components';
import { SignupLoginContent, SignupOrLoginWrap } from '../styled-components/pages/signuplogin';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class SignupLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggingIn: props.data.loggingIn
    }
  }
  switchDisplay = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    })
  }
  componentDidMount(){
    if(this.props.data.user._id){
      window.location.href = "/myaccount";
    }
  }
  render(){
    let { order, subscriptionID } = this.props.data
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <SignupLoginContent>
                {
                  subscriptionID &&
                  <OrderPreview order={order}/>
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
