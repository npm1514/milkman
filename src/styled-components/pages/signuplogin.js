import styled from 'styled-components';
import { pink, green, darkblue } from '../colors';

export const SignupLoginContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media(min-width: 700px){
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 60px auto;
  }
`;

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
