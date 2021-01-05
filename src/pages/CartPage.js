import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview } from '../components';
import { CartContent } from '../styled-components/pages/cart';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';
import { green } from '../styled-components/colors'

class Cart extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {
          currentCart: []
        },
        currentCart: [],
        verified: false
      }
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          console.log("myaccount user", user);
          if(!user._id){
            window.location.href = "/login";
          }
          else {
            this.setState({ user, verified: true })
          }
        }).catch((err) => {
          console.log("getme catch", err)
        })
    }
    render(){
      const { user, user: {currentCart}, verified } = this.state;
      return (
          <PageWrapper>
              <Header user={user}/>
              <ContentWrapper>
                {
                  verified &&
                  <CartContent>
                    <h2>Your Cart</h2>
                    {
                      currentCart.length &&
                      currentCart.map((subscription, i) => {
                        return (
                          <SubscriptionPreview key={i}
                          style={{width: "initial"}} subscription={subscription}/>
                        )
                      })
                    }
                    <a href="/chooseproducts"><Button style={{
                      background: green, color: '#fff'
                    }}>Add More</Button></a>
                    <a href="/checkout"><Button>Proceed To Checkout</Button></a>
                  </CartContent>
                }
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Cart;
