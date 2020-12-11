import styled from 'styled-components';

  export const ChooseproductsWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const ChooseproductsContent = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    min-height: calc(100vh - 89px - 145px);
    max-width: 900px;
    margin: auto;
    text-align: center;
    position: relative;
    @media (min-width: 700px){
      min-height: calc(100vh - 58px - 115px);
    }
  `;

  export const ProductWrapper = styled.div`
    width: 100%;
    padding: 8px;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  export const ProductBox = styled.div`
    height: max-content;
    padding: 8px;
    margin: 8px;
    text-align: center;
    border: 1px solid #8d8d8d;
    border-radius: 4px;
    &.productSelected {
      border: 2px solid #000;
    }
    img {
      height: 150px;
    }
  `;
  export const FlagWrapper = styled.div`
    top: -105px;
    right: 0;
    left: 0;
    margin: auto;
    width: 150px;
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    z-index: 10000;
    transition: top 1s;
    h2 {
      font-size: 24px;
      margin: 8px 0 0 0;
    }
    &.showReel {
      top: -2px;
    }
  `;
  export const Flag = styled.svg`
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    position: absolute;
    width: 150px;
    height: 100px;
  `;
