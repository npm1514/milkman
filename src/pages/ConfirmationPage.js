import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ConfirmationWrapper, ConfirmationContent } from '../styled-components/pages/confirmation';

class Confirmation extends Component {
    render(){
      return (
          <ConfirmationWrapper>
              <Header/>
              <ConfirmationContent>
                confirmation page
              </ConfirmationContent>
              <Footer/>
          </ConfirmationWrapper>
      );
    }
}

export default Confirmation;
