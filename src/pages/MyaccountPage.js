import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MyaccountContent } from '../styled-components/pages/myaccount';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Myaccount extends Component {
    constructor(props){
      super(props)
      this.state = {
        user: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          subscriptions: []
        }
      };
    }
    componentDidMount(){
      if(!this.props.data.user._id){
        window.location.href = "/login";
      }
    }


    render(){
      const { user, user: { firstName, lastName, email, password, phone, address, city, state, zip, subscriptions } } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <MyaccountContent>
                  {
                    user &&
                    <span>{firstName} {lastName}</span>
                  }
                  <a href="/chooseproducts"><Button>Add New Subscription</Button></a>
                  <div>calendar here</div>
                  <div>list of subscriptions</div>
                  <div>cart button (number)</div>
                </MyaccountContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Myaccount;
