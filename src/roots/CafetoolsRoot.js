import React, { Component } from 'react';
import { CafetoolsPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <CafetoolsPage data={data ? data : {}}/>
    }
}

export default Root;
