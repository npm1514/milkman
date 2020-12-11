import React, { Component } from 'react';
import Chooseproducts from '../pages/ChooseproductsPage';

class Root extends Component {
    render() {
        return <Chooseproducts data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;