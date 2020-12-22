import React, { Component } from 'react';
import { Header, Footer, SubscriptionPreview } from '../components';
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
        ccZipEncrypted: "",
        saveCard: false,
        verified: false,
        payMessage: "",
        subtotal: 0
      }
    }
    submitPayment = (e) => {
      e.preventDefault();
      const { ccNum, ccExp, ccCVV, ccZip, saveCard } = this.state;
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
          if(saveCard){
            this.encryptCardInfo()
          } else {
            this.createOrder()
          }
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
      const { ccNum, ccExp, ccCVV, ccZip } = this.state;
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
          ccCVVEncrypted: data.ccCVV,
          ccZipEncrypted: data.ccZip,
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
    updateUser = (orderId) => {
      let { user: {_id, currentCart, subscriptions, orders }, subtotal, ccNumEncrypted, ccExpEncrypted, ccCVVEncrypted, ccZipEncrypted } = this.state;
      let cartSubscriptions = currentCart.map(a => {
        subscriptions.push(a._id)
      });
      console.log(subscriptions);
      console.log(orderId);
      orders.push(orderId);
      fetch('/api/users/' + _id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          encryptedCard: ccNumEncrypted,
          encryptedCVV: ccExpEncrypted,
          encryptedExp: ccCVVEncrypted,
          encryptedZip: ccZipEncrypted,
          currentCart: [],
          subscriptions, orders
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
    updateCheckbox = (e) => {
      this.setState({saveCard: e.target.checked});
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
          console.log(user);
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
        }).catch(err => console.log(err))

    }
    render(){
      const { user: { currentCart }, ccNum, ccExp, ccCVV, ccZip, saveCard, verified, payMessage, subtotal } = this.state;
console.log(this.state);
      return (
          <PageWrapper>
              <Header/>
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
                      <div className="checkbox">
                        <label for="saveCard">Save Card Info?</label>
                        <input
                          id="saveCard"
                          style={{marginTop: '8px', marginLeft: '8px'}}
                          type="checkbox"
                          name="saveCard"
                          checked={saveCard}
                          required
                          onChange={this.updateCheckbox}
                        />
                      </div>
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
