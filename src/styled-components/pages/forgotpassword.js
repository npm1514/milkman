import styled from 'styled-components';

export const ForgotPasswordContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const FormBox = styled.div`
    border: 1px solid #8d8d8d;
    padding: 12px;
    margin: 12px auto;
    min-width: 40%;
    max-width: 600px;
    input, button {
      padding: 12px;
      margin: 4px 0;
      width: 100%;
      border: 1px solid #8d8d8d;
      border-radius: 3px;
    }
    button:hover {
      cursor: pointer;
      margin: 3px 0;
      border: 2px solid #8d8d8d;

    }
`;
