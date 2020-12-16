import React, { Component } from 'react';
import { CartPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <CartPage data={data ? data : {}}/>
    }
}

export default Root;
