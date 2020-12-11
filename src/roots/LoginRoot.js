import React, { Component } from 'react';
import Login from '../pages/LoginPage';

class Root extends Component {
    render() {
        return <Login data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;