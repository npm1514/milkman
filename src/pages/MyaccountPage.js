import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MyaccountContent } from '../styled-components/pages/myaccount';
import { PageWrapper, ContentWrapper, Button, ProductBox } from '../styled-components/global';

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
      const { user, user: { _id, firstName, lastName, email, password, phone, address, city, state, zip, subscriptions, currentCart }, verified } = this.state;
      return (
          <PageWrapper>
              <Header user={user}/>
              <ContentWrapper>
                {
                  verified &&
                  <MyaccountContent>
                  <ProductBox>
                    <h2>{firstName} {lastName}</h2>
                    <p>{address} {city}, {state} {zip}</p>
                    <p>{email} - {phone}</p>
                    <Button>Edit</Button>
                  </ProductBox>
                    <h2>Your Subscriptions</h2>
                    {
                      subscriptions.map((a, i) => {
                        return (
                          <div>{a.size} {a.flavor} {a.name} - {a.deliveryFrequency}</div>
                        )
                      })
                    }
                    <a href="/chooseproducts"><Button>Add New Subscription</Button></a>



                    <div>calendar here</div>

                    {
                      currentCart.length ?
                      <a href="/cart"><Button>Go To Cart ({currentCart.length})</Button></a> : null
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
