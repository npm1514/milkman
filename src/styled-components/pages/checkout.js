import styled from 'styled-components';

export const CheckoutContent = styled.div`
  width: 100%;
  text-align: center;
  input {
    padding: 12px;
    margin: 4px 0;
    width: 230px;
    border: 1px solid #8d8d8d;
    border-radius: 3px;
  }
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .checkbox {
    width: 300px;
    text-align: center;
    marginm: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
