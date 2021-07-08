import styled, { css } from 'styled-components';
import Tooltip from '../../atoms/Tooltip';

type StyleProps = {
  isFocused: boolean;
  isFielld: boolean;
  isErrored: boolean;
};

export const Container = styled.div<StyleProps>`
  border-radius: 0;
  border: 2px solid #ccc;
  width: 100%;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  height: 56px;
  padding-left: 8px;
  color: #666360;
  svg {
    margin: 8px;
  }

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


  @media (min-width: 1199px) {
    margin-bottom: inherit;
  }
`;

export const Select = styled.select`
  height: 100%;
  display: flex;
  flex: 1;
  padding: 8px 0;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  color: #666360;
`;

export const SelectItem = styled.option``;

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0 16px;
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
