import styled, {css} from 'styled-components';

import {IInputContainer} from './input.interface';

export const Container = styled.div<IInputContainer>`
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.colors.background};
  padding: 16px;
  width: 100%;
  color: ${({theme}) => theme.colors.placeholder};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${(props) => props.theme.colors.secundary};
      border-color: ${(props) => props.theme.colors.secundary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme.colors.secundary};
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${({theme}) => theme.colors.text};

    &::placeholder {
      color: ${({theme}) => theme.colors.placeholder};
    }
  }

  svg {
    margin-right: 16px;
  }
`;
