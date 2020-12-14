import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview, SignupOrLogin } from '../components';
import { SignupWrapper, SignupContent } from '../styled-components/pages/signup';

class Signup extends Component {
    render(){
      let { subscription, subscriptionID } = this.props.data
      console.log(subscription, subscriptionID);
      return (
          <SignupWrapper>
              <Header/>
              <SignupContent>
                {
                  subscriptionID ?
                  <SubscriptionPreview subscription={subscription}/> :
                  <SignupOrLogin/>
                }
              </SignupContent>
              <Footer/>
          </SignupWrapper>
      );
    }
}

export default Signup;
