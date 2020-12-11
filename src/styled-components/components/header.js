import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from '../colors';

export const HeaderWrap = styled.div`
  width: 100vw;
  background-color: ${darkblue};
  position: ${props => props.menuStuck ? 'fixed': 'static'};
  top: 0;
  left: 0;
  z-index: 10;
`;
export const DesktopHeader = styled.header`
  width: 100%;
  max-width: 732px;
  margin: auto;
  background-color: ${darkblue};
  position: relative;
  height: 72px;
  color: ${white};
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10;
  a {
    text-decoration: none;
    text-align: center;
    font-size: 24px;
    color: ${white};
    margin: 0 12px;
  }
  a:hover {
    color: ${lightblue};
    transition: color 0.5s;
  }
  @media (min-width: 700px){
    display: flex;
  }
`;
export const MobileHeader = styled.header`
  width: 100%;
  max-width: 732px;
  margin: auto;
  position: fixed;
  top: 20px;
  left: 0;
  background-color: ${darkblue};
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  z-index: 10;
  img {
    width: 140px;
    margin: 12px 24px;
  }
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    color: ${white};
    margin: 0;
    font-weight: 500;
    letter-spacing: 1;
  }
  @media (min-width: 700px){
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  max-width: 732px;
  margin: auto;
  background-color: ${green};
  height: 140px;
  display: flex;
  position: fixed;
  top: 102px;
  left: 0;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 20;
  div {
    width: 50%;
    text-align: center;
    a {
      text-decoration: none;
      text-align: center;
      font-size: 24px;
      color: ${white};
      margin: auto;
    }
  }
  .online-order {
    color: ${darkblue};
    width: 100%;
    padding: 8px 0;
    background-color: ${pink};
  }
  a:hover {
    color: ${lightblue};
    transition: color 0.5s;
  }
  @media(min-width: 700px){
    display: none;
  }
`;

export const HexLock = styled.div`
  width: calc(40% - 24px);
  margin: 12px;
  height: 100%;
  position: relative;
`;

export const Spacer = styled.div`
  height: 132px;
  width: 100%;
  background-color: ${white};
  @media(min-width: 700px){
    height: ${props => props.menuStuck ? '80px' : '0'};
  }
`;
export const OnlineOrder = styled.div`
  width: 100%;
  color: ${darkblue};
  background-color: ${pink};
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  a {
    width: 100%;
    text-decoration: none;
    text-align: center;
    color: ${darkblue};
    font-size: 24px;
    margin: 0 12px;
  }
  a:hover {
    color: ${lightblue};
    transition: color 0.5s;
  }
  @media(min-width: 700px){
    display: none;
  }
`;

export const DesktopOrder = styled.div`
  width: 100%;
  color: ${darkblue};
  background-color: ${pink};
  text-align: center;
  position: relative;
  z-index: 10;
  display: none;
  a {
    width: 100%;
    text-decoration: none;
    text-align: center;
    color: ${darkblue};
    font-size: 24px;
    margin: 0 12px;
  }
  a:hover {
    color: red;
    transition: color 0.5s;
    text-shadow: 0 0 1px red;
  }
  @media(min-width: 700px){
    display: block;
  }
`;
