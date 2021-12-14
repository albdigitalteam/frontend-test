import styled from 'styled-components';

import Input from '../../components/input/index.component';
import Button from '../../components/button/index.component';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;

  padding: 10px;
  border-radius: 8px;
  background: #242526;

  img {
    width: 128px;
    height: 128px;

    align-self: center;
    margin-bottom: 4px;
  }

  @media (min-width: 760px) {
    width: 70%;
    max-width: 700px;
  }
`;

export const EmailInput = styled(Input)``;

export const SigninButton = styled(Button)`
  width: 100%;

  margin-top: 10px;
`;
