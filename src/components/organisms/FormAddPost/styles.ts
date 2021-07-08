import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Container as InputContainer } from '../Input/styles';

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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;
  }
  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  padding-top: 10px;
`;
