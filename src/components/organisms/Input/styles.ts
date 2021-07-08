import styled, { css } from 'styled-components';

import Tooltip from '../../atoms/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFielld: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #ccc;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c54040;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #375f9b;
      border-color: #375f9b;
    `}

  ${(props) =>
    props.isFielld &&
    css`
      color: #375f9b;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #233129 inset;
      -webkit-text-fill-color: #fff !important;
    }

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
