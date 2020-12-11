import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartWrapper, CartContent } from '../styled-components/pages/cart';

class Cart extends Component {
    render(){
      return (
          <CartWrapper>
              <Header/>
              <CartContent>
                cart page
              </CartContent>
              <Footer/>
          </CartWrapper>
      );
    }
}

export default Cart;
