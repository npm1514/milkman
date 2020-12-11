import styled from 'styled-components';

export const Hex = styled.svg`
  margin: auto;
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  &.desktop-hex {
    display: none;
  }
  &.mobile-hex {
    display: inline;
  }
  polygon:first-child {
    fill: ${props => props.color};;
    stroke-width: 0;
  }
  @media (min-width: 700px){
    &.desktop-hex {
      display: inline;
    }
    &.mobile-hex {
      display: none;
    }
  }
`;
