import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ConfirmationContent } from '../styled-components/pages/confirmation';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Confirmation extends Component {
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
          if(user._id){
            this.setState({ user })
          } else {
            window.location.href = "/login";
          }
        }).catch(err => console.log(err))
    }
    render(){
      const { orderID, order } = this.props;
      console.log(order);
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ConfirmationContent>
                  confirmation page {orderID}
                </ConfirmationContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Confirmation;
