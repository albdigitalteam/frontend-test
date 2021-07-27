import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsContent = styled.div`
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

export const InputTextComment = styled.input`
  margin-left: 15px;
  width: 97%;
  border: none;
  background-color: rgb(58, 59, 60);
  padding: 12px;
  color: #fff;
  border-radius: 20px;
  ::placeholder {
    color: rgb(176, 179, 184);
    font-size: 15px;
  }
`;
