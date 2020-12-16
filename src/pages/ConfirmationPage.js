import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ConfirmationContent } from '../styled-components/pages/confirmation';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Confirmation extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ConfirmationContent>
                  confirmation page
                </ConfirmationContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Confirmation;
