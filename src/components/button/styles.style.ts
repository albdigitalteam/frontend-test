import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.button`
  background: ${({theme}) => theme.colors.secundary};
  height: 56px;
  border: 0 solid ${({theme}) => theme.colors.background};
  padding: 0 16px;
  width: 100%;
  color: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${({theme}) => shade(0.2, theme.colors.secundary)};
  }
`;
