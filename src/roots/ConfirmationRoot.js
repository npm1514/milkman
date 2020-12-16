import React, { Component } from 'react';
import { ConfirmationPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ConfirmationPage data={data ? data : {}}/>
    }
}

export default Root;
