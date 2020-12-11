import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MyaccountWrapper, MyaccountContent } from '../styled-components/pages/myaccount';

class Myaccount extends Component {
    render(){
      return (
          <MyaccountWrapper>
              <Header/>
              <MyaccountContent>
                myaccount page
              </MyaccountContent>
              <Footer/>
          </MyaccountWrapper>
      );
    }
}

export default Myaccount;
