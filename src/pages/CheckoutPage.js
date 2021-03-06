import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview, Loading } from '../components';
import { CheckoutContent } from '../styled-components/pages/checkout';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Checkout extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {
          currentCart: []
        },
        ccNum: "",
        ccExp: "",
        ccCVV: "",
        ccZip: "",
        ccNumEncrypted: "",
        ccExpEncrypted: "",
        ccCVVEncrypted: "",
        verified: false,
        payMessage: "",
        subtotal: 0,
        loading: false
      }
    }
    submitPayment = (e) => {
      this.setState({loading: true})
      e.preventDefault();
      const { ccNum, ccExp, ccCVV, ccZip } = this.state;
      fetch('/api/pay', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ccNum, ccExp, ccCVV, ccZip })
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json()
      })
      .then(res => {
        console.log("res", res.message);
        if(res.message == "success"){
          this.encryptCardInfo()
        } else {
          this.setMessage(res.message)
        }
        console.log("payment success", res);
      })
      .catch((err) => {
        console.log("payment error", err);
      })
    }
    encryptCardInfo = () => {
      console.log("encryption");
      const { ccNum, ccExp, ccCVV } = this.state;
      fetch('/api/card', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ccNum, ccExp, ccCVV, ccZip })
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json()
      })
      .then((data) => {
        console.log("card info encrypted", data);
        this.setState({
          ccNumEncrypted: data.ccNum,
          ccExpEncrypted: data.ccExp,
          ccCVVEncrypted: data.ccCVV
        }, () => {
          this.createOrder()
        })
      })
      .catch((err) => {
        console.log("card info not encrypted", err);
      })
    }
    createOrder = () => {
      const { user: { _id, currentCart }, subtotal  } = this.state;
      fetch('/api/orders', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: _id,
          subscriptions: currentCart.map(a => a._id),
          price: subtotal,
          date: new Date()
        })
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json()
      })
      .then((data) => {
        console.log("order created", data);
        this.updateUser(data._id);
      })
      .catch((err) => {
        console.log("order creation error", err);
      })
    }
    updateSubscriptions = (orderID) => {
      let { currentCart } = this.state.user;
      let promises = currentCart.map(a => {
        return fetch('/api/subscriptions/' + _id, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            active: true
          })
        })
        .then((res) => {
          if(res.status !== 200) throw Error(res.statusText);
          return res.json()
        })
        .then((data) => {
          console.log("update subscription success", data);
        })
        .catch((err) => {
          console.log("update user error", err);
        })
      });
      Promise.all(promises)
      .then(() => {
        this.updateUser(orderID)
      })
    }
    updateUser = (orderId) => {
      let { user: {_id, currentCart, subscriptions, orders }, subtotal, ccNum, ccNumEncrypted, ccExpEncrypted, ccCVVEncrypted, ccZip } = this.state;
      let cartSubscriptions = currentCart.map(a => {
        subscriptions.push(a._id)
      });
      orders.push(orderId);
      fetch('/api/users/' + _id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          encryptedCard: ccNumEncrypted,
          encryptedCVV: ccExpEncrypted,
          encryptedExp: ccCVVEncrypted,
          last4CC: ccNum.slice(ccNum.length - 4),
          currentCart: [],
          ccZip, subscriptions, orders
        })
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json()
      })
      .then((data) => {
        console.log("update user success", data);
        window.location.href = "/confirmation/" + orderId;
      })
      .catch((err) => {
        console.log("update user error", err);
      })
    }
    updateState = (e, prop) => {
      let obj = {};
      obj[prop] = e.currentTarget.value;
      this.setState(obj);
    }
    setMessage = (message) => {
      this.setState({message})
      setTimeout(() => {
        this.setState({message: ""})
      }, 3000)
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
          console.log("checkout user", user);
          if(!user._id){
            window.location.href = "/login";
          } else if(!user.currentCart.length){
            window.location.href = "/myaccount";
          } else {
            this.setState({
              user,
              verified: true,
              subtotal: user.currentCart.reduce((a, b) => a + b.pricePerDelivery, 0)
            })
          }
        }).catch(err => console.log("getme catch", err))

    }
    render(){
      const { user, user: { currentCart }, ccNum, ccExp, ccCVV, ccZip, verified, payMessage, subtotal, loading } = this.state;

      return (
          <PageWrapper>
              <Header user={user}/>
              { loading && <Loading/> }
              <ContentWrapper>
                {
                  verified &&
                  <CheckoutContent>
                    <h2>Your Cart</h2>
                    {
                      currentCart.map((subscription,  index) => {
                        return (
                          <SubscriptionPreview key={index} subscription={subscription}/>
                        )
                      })
                    }

                    <h2>Subtotal: ${subtotal}</h2>
                    {
                      payMessage &&
                      <span>{payMessage}</span>
                    }
                    <form onSubmit={this.submitPayment}>
                      <input
                        placeholder="CCN"
                        type="text"
                        value={ccNum}
                        required
                        onChange={(e) => {this.updateState(e, "ccNum")}}
                      />
                      <input
                        placeholder="EXP"
                        type="text"
                        value={ccExp}
                        required
                        onChange={(e) => {this.updateState(e, "ccExp")}}
                      />
                      <input
                        placeholder="CVV"
                        type="text"
                        value={ccCVV}
                        required
                        onChange={(e) => {this.updateState(e, "ccCVV")}}
                      />
                      <input
                        placeholder="Card Zip"
                        type="text"
                        value={ccZip}
                        required
                        onChange={(e) => {this.updateState(e, "ccZip")}}
                      />
                      <Button type="submit">Submit Payment</Button>
                    </form>
                  </CheckoutContent>
                }
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Checkout;
