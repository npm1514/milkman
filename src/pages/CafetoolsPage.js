import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CafetoolsContent } from '../styled-components/pages/cafetools';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Cafetools extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CafetoolsContent>
                  cafetools page
                </CafetoolsContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Cafetools;
