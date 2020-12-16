import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CartContent } from '../styled-components/pages/cart';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Cart extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CartContent>
                  cart page
                </CartContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Cart;
