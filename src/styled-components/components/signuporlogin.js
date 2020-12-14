import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from '../colors';

export const SignupOrLoginWrap = styled.div`
  width: 100vw;
  background-color: ${darkblue};
  position: ${props => props.menuStuck ? 'fixed': 'static'};
  top: 0;
  left: 0;
  z-index: 10;
`;
