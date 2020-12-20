import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview } from '../components';
import { CartContent } from '../styled-components/pages/cart';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Cart extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {
          currentCart: []
        },
        currentCart: []
      }
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          if(!user._id){
            window.location.href = "/login";
          } else {
            this.setState({ user })
          }
        }).catch(err => console.log(err))
    }
    render(){
      const { currentCart } = this.state.user;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <CartContent>
                  {
                    currentCart.map((subscription, i) => {
                      return (
                        <SubscriptionPreview key={i} subscription={subscription}/>
                      )
                    })
                  }
                  <a href="/checkout"><Button>Proceed To Checkout</Button></a>
                </CartContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Cart;
