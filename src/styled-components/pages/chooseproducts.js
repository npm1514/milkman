import styled from 'styled-components';
import { pink } from '../colors'

export const ChooseproductsContent = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
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

export const FlagWrapper = styled.div`
  top: -120px;
  right: 0;
  left: 0;
  margin: auto;
  width: 250px;
  height: 130px;
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
  &.hideReel {
    top: -120px;
  }
`;
export const Flag = styled.svg`
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  position: absolute;
  width: 250px;
  height: 130px;
`;
