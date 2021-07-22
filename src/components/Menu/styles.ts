import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
    color: #667580;
    margin-right: 12px;
    cursor: pointer;

    img:first-child {
      margin-left: 0;
    }

    img {
      margin-right: 6px;
    }
  }
`;
