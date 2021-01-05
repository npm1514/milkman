import React, { Component } from 'react';
import { ForgotPasswordPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ForgotPasswordPage data={data ? data : {}}/>
    }
}

export default Root;
