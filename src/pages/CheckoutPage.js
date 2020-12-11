import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckoutWrapper, CheckoutContent } from '../styled-components/pages/checkout';

class Checkout extends Component {
    render(){
      return (
          <CheckoutWrapper>
              <Header/>
              <CheckoutContent>
                checkout page
              </CheckoutContent>
              <Footer/>
          </CheckoutWrapper>
      );
    }
}

export default Checkout;
