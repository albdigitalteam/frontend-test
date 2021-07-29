import React from 'react';
import styled from 'styled-components';

import { Text } from './';
import { colors } from '../../utils';

const Input = ({ height=false, title, erro, titleColor, ...props }) => (
  <Wrapper {...props}>
    {title && <Text color={titleColor} weight="bold">{title}</Text>}
    <Body height={height} {...props} />
    {erro !== '' ? <Text helper color={colors.red60}>{erro}</Text> : null}
  </Wrapper>
);

const Wrapper = styled.View`
  width: ${props => props.width ? props.width : 100}%;
  margin-top: 10px;
  align-self: stretch;
`;
const Body = styled.TextInput`
  padding: 8px;
  width: 100%;
  border-width: 1px;
  height: ${props => props.height ? props.height : 40}px;
  border-color: ${colors.gray40};
  background-color: ${colors.white};
  margin-top: 5px;
`;

export default Input;