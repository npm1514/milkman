import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CheckoutContent } from '../styled-components/pages/checkout';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Checkout extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CheckoutContent>
                  checkout page
                </CheckoutContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Checkout;
