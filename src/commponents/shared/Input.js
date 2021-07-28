import React from 'react';
import styled from 'styled-components';

import { Text } from './';
import { colors } from '../../utils';

const Input = ({ title, erro, ...props }) => (
  <Wrapper {...props}>
    <Text weight="bold">{title}</Text>
    <Body {...props} />
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
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: ${colors.gray40};
  background-color: ${colors.white};
  margin-top: 5px;
`;

export default Input;