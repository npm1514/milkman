import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CafetoolsContent } from '../styled-components/pages/cafetools';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Cafetools extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {}
      }
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          if(user.admin){
            this.setState({ user })
          } else if(user._id){
            window.location.href = "/myaccount";
          } else {
            window.location.href = "/login";
          }
        }).catch(err => console.log(err))
    }
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
