import React, { Component } from 'react';
import Subscribe from '../pages/SubscribePage';

class Root extends Component {
    render() {
        return <Subscribe data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;