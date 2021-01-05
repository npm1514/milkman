import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { FourOhFourContent } from '../styled-components/pages/fourohfour';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class FourOhFour extends Component {
    render(){
      const { userID, timer } = this.props.data;
      console.log(userID);
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <FourOhFourContent>
                  <h2>Oh No! It looks like you need some more coffee!</h2>
                  <a href="/"><Button>Let's Go Home</Button></a>
                  <br/>
                  <img src="/images/needcoffee.gif"/>
                </FourOhFourContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default FourOhFour;
