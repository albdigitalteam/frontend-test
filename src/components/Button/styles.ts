import styled, { css } from 'styled-components';

interface IButtonPubish {
  disabled: boolean;
}
export const Container = styled.button<IButtonPubish>`
  ${(props: IButtonPubish) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}
  padding: 10px;
  border: none;
  border-radius: 11px;
  width: 97%;
  margin: 5px 15px;
  color: #fff;
  background-color: rgb(45, 136, 255);
`;
