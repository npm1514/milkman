import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CheckoutContent } from '../styled-components/pages/checkout';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Checkout extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {
          currentCart: []
        }
      }
    }
    submitPayment = (e) => {
      e.preventDefault();
      //submit payment
      // .then(res => {
        window.location.href = "/confirmation/12345";
      // })
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          console.log(user);
          if(!user._id){
            // window.location.href = "/login";
          } else {
            this.setState({ user })
          }
        }).catch(err => console.log(err))
    }
    render(){
      const { currentCart } = this.state.user;
      let subtotal = currentCart.reduce((a, b) => a + b.pricePerDelivery, 0)

      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CheckoutContent>
                  {
                    subtotal &&
                    <h2>Subtotal: ${subtotal}</h2>
                  }
                  <div>form with credit card info</div>
                  <Button onClick={this.submitPayment}>Submit Payment</Button>
                </CheckoutContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Checkout;
