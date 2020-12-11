import React, { Component } from 'react';
import Cart from '../pages/CartPage';

class Root extends Component {
    render() {
        return <Cart data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;