import styled from 'styled-components';

export const Container = styled.header`
  height: 50px;
  background: ${({theme}) => theme.colors.background};
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 800px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  h1 {
    font-size: 32px;
    color: ${({theme}) => theme.colors.text};
  }
`;

export const LogoButton = styled.button`
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-right: 16px;
    cursor: pointer;
  }
`;
