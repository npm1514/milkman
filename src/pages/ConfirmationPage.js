import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ConfirmationContent } from '../styled-components/pages/confirmation';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Confirmation extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {},
        verified: false
      }
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          if(user._id){
            this.setState({ user, verified: true })
          } else {
            window.location.href = "/login";
          }
        }).catch(err => console.log(err))
    }
    render(){
      const { orderID, order } = this.props;
      const { verified, user } = this.state;
      console.log(order);
      return (
          <PageWrapper>
              <Header user={user}/>
              <ContentWrapper>
                {
                  !verified && order &&
                  <ConfirmationContent>
                    <h2>confirmation page: {orderID}</h2>
                    <p>Date: {order.date}</p>
                    {
                      order.subscriptions.map((subscription,  index) => {
                        return (
                          <SubscriptionPreview key={index} subscription={subscription}/>
                        )
                      })
                    }
                    <p>Price: {order.price}</p>
                    <p>{user.firstName} {user.lastName}</p>
                    <a href="/myaccount">
                      <Button>Go Back To Your Account</Button>
                    </a>
                  </ConfirmationContent>
                }
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Confirmation;
