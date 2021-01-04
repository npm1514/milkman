import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from '../colors';

export const LoadingWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #8d8d8d90;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 350px;
  }
  z-index: 100;
`;
