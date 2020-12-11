import React, { Component } from 'react';
import Myaccount from '../pages/MyaccountPage';

class Root extends Component {
    render() {
        return <Myaccount data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;