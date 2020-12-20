import React, { Component } from 'react';
import { SubscriptionPreviewWrap } from '../styled-components/components/subscriptionpreview';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class SubscriptionPreviewComponent extends Component {
  render(){
    const { deliveryFrequency, flavor, payPeriodFrequency, pricePerDelivery, pricePerPayPeriod, product, quantity, recurringPayment, size, startDate, timeOfDelivery, _id } = this.props.subscription;
    return (
      <SubscriptionPreviewWrap>

        <p>{_id}</p>
        <h2>Your Cart</h2>
        <div>({quantity}) {size} {flavor} {product}</div>
        <br/>
        <hr/>
        <br/>
        <div>Delivery Frequency: {deliveryFrequency}</div>
        <div>Start Date: {startDate}</div>
        <div>Time Of Delivery: {timeOfDelivery}</div>
        <div>Payment Frequency: {payPeriodFrequency}</div>
        <div>Price Per Payment Period: { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pricePerPayPeriod) }</div>
        <div>Recurring Payment: {recurringPayment.toString()}</div>
      </SubscriptionPreviewWrap>
    );
  }
}

export default SubscriptionPreviewComponent;
