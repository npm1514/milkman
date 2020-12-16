import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LandingContent } from '../styled-components/pages/landing';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Landing extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <LandingContent>
                  <h2>Delivery Subscriptions</h2>
                  <p>This is where I talk about subscriptions.</p>
                  <a href="/chooseproducts">
                    <Button>Get Started</Button>
                  </a>
                  <a href="/login">
                    <Button>Login</Button>
                  </a>
                  <a href="/signup">
                    <Button>Sign Up</Button>
                  </a>
                </LandingContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Landing;
