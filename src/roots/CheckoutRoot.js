import React, { Component } from 'react';
import Checkout from '../pages/CheckoutPage';

class Root extends Component {
    render() {
        return <Checkout data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;