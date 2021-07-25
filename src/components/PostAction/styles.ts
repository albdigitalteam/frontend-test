import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 25%;
  div {
    :hover {
      cursor: pointer;
    }
    margin: 10px 5px;
    span {
      padding-left: 5px;
      font-weight: bold;
      font-size: 12px;
      color: rgb(110, 118, 125);
    }
  }
  img {
    width: 20px;
    height: 20px;
  }

  div:first-child {
    margin-left: 0;
  }
`;
