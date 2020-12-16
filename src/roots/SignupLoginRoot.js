import React, { Component } from 'react';
import { SignupLoginPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <SignupLoginPage data={data ? data : {}}/>
    }
}

export default Root;
