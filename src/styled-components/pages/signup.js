import styled from 'styled-components';

  export const SignupWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const SignupContent = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    min-height: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media(min-width: 700px){
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      max-width: 900px;
      margin: 60px auto;
    }
  `;
