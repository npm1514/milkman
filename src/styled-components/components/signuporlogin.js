import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from '../colors';

export const SignupOrLoginWrap = styled.div`
  border: 1px solid #8d8d8d;
  padding: 12px;
  margin: 12px;
  min-width: 40%;
  input, button {
    padding: 12px;
    margin: 4px 0;
    width: 100%;
    border: 1px solid #8d8d8d;
    border-radius: 3px;
  }
  button {
    background-color: ${pink};
  }
  a {
    color: ${green};
  }
  a:hover {
    color: ${darkblue};
    cursor: pointer;
  }

`;
