import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from '../colors';

export const LoginWrap = styled.div`
  width: calc(100vw - 56px);
  max-width: 900px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(min-width: 700px){
    width: initial;
  }
`;
