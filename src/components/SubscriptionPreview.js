import React, { Component } from 'react';
import { SubscriptionPreviewWrap } from '../styled-components/components/subscriptionpreview';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class SubscriptionPreviewComponent extends Component {
  render(){
    const { deliveryFrequency, flavor, payPeriodFrequency, pricePerDelivery, pricePerPayPeriod, product, quantity, recurringPayment, size, startDate, timeOfDelivery, _id } = this.props.subscription;
    return (
      <SubscriptionPreviewWrap>
        <div>Subscription ID: {_id}</div>
        <div>Product: {product}</div>
        <div>Flavor: {flavor}</div>
        <div>Size: {size}</div>
        <div>Quantity: {quantity}</div>
        <div>Delivery Frequency: {deliveryFrequency}</div>
        <div>Start Date: {startDate}</div>
        <div>Time Of Delivery: {timeOfDelivery}</div>
        <div>Payment Frequency: {payPeriodFrequency}</div>
        <div>Price Per Payment Period</div>
        <div>Recurring Payment: {recurringPayment}</div>
      </SubscriptionPreviewWrap>
    );
  }
}

export default SubscriptionPreviewComponent;
