import React, { Component } from 'react';
import { ChooseproductsPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ChooseproductsPage data={data ? data : {}}/>
    }
}

export default Root;
