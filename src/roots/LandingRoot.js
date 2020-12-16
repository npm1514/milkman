import React, { Component } from 'react';
import { LandingPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <LandingPage data={data ? data : {}}/>
    }
}

export default Root;
