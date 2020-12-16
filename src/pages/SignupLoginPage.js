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
  render(){
    let { order, orderID } = this.props.data
    console.log(this.state.loggingIn);
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <SignupLoginContent>
                {
                  orderID &&
                  <OrderPreview order={order}/>
                }
                <SignupOrLoginWrap>
                {
                  this.state.loggingIn ?
                  <Login switchDisplay={this.switchDisplay} orderID={orderID}/> :
                  <Signup switchDisplay={this.switchDisplay} orderID={orderID}/>
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
