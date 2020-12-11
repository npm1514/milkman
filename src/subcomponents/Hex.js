import React, { Component } from 'react';
import { Hex } from '../styled-components/subcomponents/hex';

class HexComponent extends Component {
  render(){
    let { size, top, bottom, left, right, color, className, onClick } = this.props;
    size = size || 100;
    return (
      <Hex
        viewBox="0 0 100 100"
        height={size}
        width={size}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        color={color}
        className={className}
        onClick={onClick}
      >
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
        {this.props.children}
      </Hex>
    );
  }
}

export default HexComponent;
