import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MyaccountContent } from '../styled-components/pages/myaccount';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Myaccount extends Component {
    constructor(props){
      super(props)
      this.state = {
        user: {
          _id: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          subscriptions: [],
          currentCart: []
        },
        verified: false
      };
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          console.log(user);
          if(!user._id){
            window.location.href = "/login";
          } else {
            this.setState({ user, verified: true })
          }
        }).catch(err => console.log(err))
    }
    render(){
      const { user: { _id, firstName, lastName, email, password, phone, address, city, state, zip, subscriptions, currentCart }, verified } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                {
                  verified &&
                  <MyaccountContent>
                    <span>{firstName} {lastName}</span>
                    <a href="/chooseproducts"><Button>Add New Subscription</Button></a>
                    <div>calendar here</div>
                    <div>list of subscriptions</div>
                    {
                      currentCart.length &&
                      <a href="/cart"><Button>Go To Cart ({currentCart.length})</Button></a>
                    }
                  </MyaccountContent>
                }

              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Myaccount;
