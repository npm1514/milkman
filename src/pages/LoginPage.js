import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoginWrapper, LoginContent } from '../styled-components/pages/login';

class Login extends Component {
    render(){
      return (
          <LoginWrapper>
              <Header/>
              <LoginContent>
                login page
              </LoginContent>
              <Footer/>
          </LoginWrapper>
      );
    }
}

export default Login;
