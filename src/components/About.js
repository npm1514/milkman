import React, { Component } from 'react';
import { AboutWrap, About, AboutLeft, AboutRight } from '../styled-components/components/about';
import { lightblue, darkblue } from '../styled-components/colors';

class AboutComponent extends Component {
  render(){
    const { noHexes, noLogo, id } = this.props;
    return (
      <AboutWrap id={id}>
        <About>
          {
            !noLogo &&
            <AboutLeft>
              <img src="/images/Cafe-Juniper_Primary_03.png" alt="primary logo"/>
            </AboutLeft>
          }
          <AboutRight>
            {this.props.children}
          </AboutRight>
        </About>
      </AboutWrap>
    );
  }
}

export default AboutComponent;
