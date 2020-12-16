import React, { Component } from 'react';
import { OrderPreviewWrap } from '../styled-components/components/orderpreview';
import { green, darkblue, pink, brown, lightblue } from '../styled-components/colors';

class OrderPreviewComponent extends Component {
  render(){
    const { deliveryFrequency, flavor, payPeriodFrequency, pricePerDelivery, pricePerPayPeriod, product, quantity, recurringPayment, size, startDate, timeOfDelivery, _id } = this.props.order;
    return (
      <OrderPreviewWrap>

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
      </OrderPreviewWrap>
    );
  }
}

export default OrderPreviewComponent;
