import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SubscribeWrapper, SubscribeContent } from '../styled-components/pages/subscribe';

class Subscribe extends Component {
    render(){
      return (
          <SubscribeWrapper>
              <Header/>
              <SubscribeContent>
                subscribe page
                <a href="/chooseproducts"><button>Get Started</button></a>
              </SubscribeContent>
              <Footer/>
          </SubscribeWrapper>
      );
    }
}

export default Subscribe;
