import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  background-color: #fff;
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  @media (min-width: 1199px) {
    width: 500px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  padding-top: 10px;
`;
