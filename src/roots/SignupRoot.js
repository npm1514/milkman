import React, { Component } from 'react';
import Signup from '../pages/SignupPage';

class Root extends Component {
    render() {
        return <Signup data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
