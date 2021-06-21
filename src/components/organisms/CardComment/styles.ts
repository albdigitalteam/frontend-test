import styled from 'styled-components';
import { Container as SubTitleContainer } from '../../atoms/Subtitle/styles';

export const Container = styled.div`
  width: 98%;
  margin: 0 auto;
  background-color: #375f9b12;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  ${SubTitleContainer} {
    font-size: 12px;
    margin: 5px 0 10px 0;
    color: #817f80;
  }
`;

export const Image = styled.img`
  width: 200px;
`;
