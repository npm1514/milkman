import styled from 'styled-components';
import { white, green, darkblue } from '../colors';
export const CateringMenuWrap = styled.div`
  width: 100%;
  background-color: ${white};
  h2 {
    color: ${darkblue};
  }
`;
export const CateringMenu = styled.div`
  width: calc(100% - 64px);
  background-color: ${white};
  color: ${green};
  padding: 32px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 762px;
  margin: auto;
  table {
    width: 100%;
    max-width: 334px;
  }
  tr th:first-child {
    text-align: left;
    padding: 0;
    width: 170px;
  }
  tr td:first-child {
    text-align: left;
    padding: 0;
  }
  th {
    text-align: right;
    color: ${darkblue};
    padding: 0 4px;
    min-width: 30px;
  }
  td {
    text-align: right;
    color: ${green};
    padding: 0 4px;
  }
  sup {
    font-size: 12px;
  }
  h2 {
    width: 100%;
    text-align: left;
    max-width: 334px;
    margin: initial auto;
  }
  @media (min-width: 700px){
    .mobile-menu-header {
      display: none;
    }
    table {
      max-width: 439px;
    }
    tr th:first-child {
      text-align: left;
      padding-left: 0;
      width: 172px;
    }
    th, td {
      font-size: 18px;
      padding: 0 12px;
    }
    h2 {
      max-width: 439px;
    }
  }
  @media (min-width: 800px){
    table {
      max-width: 528px;
    }
    th, td {
      font-size: 28px;
    }
    h2 {
      max-width: 528px;
    }
  }
`;
