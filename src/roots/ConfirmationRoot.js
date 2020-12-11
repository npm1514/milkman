import React, { Component } from 'react';
import Confirmation from '../pages/ConfirmationPage';

class Root extends Component {
    render() {
        return <Confirmation data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;