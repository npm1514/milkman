import React, { Component } from 'react';
import { CheckoutPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <CheckoutPage data={data ? data : {}}/>
    }
}

export default Root;
