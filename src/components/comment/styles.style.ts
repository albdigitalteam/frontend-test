import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }

  & + div {
    margin-top: 12px
  }
`;

export const Content = styled.div`
  h1 {
    font-size: 14px;
  }
`;
