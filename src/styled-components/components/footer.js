import styled from 'styled-components';
import {darkblue, white, lightblue } from '../colors';

export const Footer = styled.footer`
  width: calc(100% - 32px);
  background-color: ${darkblue};
  color: ${white};
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    line-height: 0.85;
  }
  i {
    margin-left: 8px;
  }
  svg {
    margin-left: 4px;
  }
  a {
    color: ${white};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
  a:hover {
    color: ${lightblue};
    transition: color 0.5s;
  }
  a:visited {
    color: ${white};
  }
  i:hover {
    color: ${lightblue};
    transition: color 0.5s;
  }
  svg {
    fill: ${white};
  }
  svg: hover {
    fill: ${lightblue};
    transition: fill 0.5s;
  }
  @media (min-width: 700px){
    flex-direction: row;
    align-items: flex-start;
    div {
      margin: 0;
    }
  }
`;
