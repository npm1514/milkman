import React, { Component } from 'react';
import { LoadingWrap } from '../styled-components/components/loading';

class LoadingComponent extends Component {
  render(){
    return (
      <LoadingWrap>
        <img src="/images/loading.gif"/>
      </LoadingWrap>
    );
  }
}

export default LoadingComponent;
