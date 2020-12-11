import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CafetoolsWrapper, CafetoolsContent } from '../styled-components/pages/cafetools';

class Cafetools extends Component {
    render(){
      return (
          <CafetoolsWrapper>
              <Header/>
              <CafetoolsContent>
                cafetools page
              </CafetoolsContent>
              <Footer/>
          </CafetoolsWrapper>
      );
    }
}

export default Cafetools;
