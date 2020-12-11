import React, { Component } from 'react';
import Cafetools from '../pages/CafetoolsPage';

class Root extends Component {
    render() {
        return <Cafetools data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;