import styled, {keyframes} from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    > a {
      color: ${({theme}) => theme.colors.text};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${({theme}) => shade(0.2, theme.colors.text)};
      }
    }
  }

  > a {
    color: ${({theme}) => theme.colors.secundary};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${({theme}) => shade(0.2, theme.colors.secundary)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Logo = styled.img`
  max-height: 75px;
`;
