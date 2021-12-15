import styled from 'styled-components';

import Button from '../../../components/button/index.component';

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 10px;
`;

export const Container = styled.div`
  input {
    margin-top: 8px;
  }

  textarea {
    margin-top: 8px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  margin-bottom: 10px;

  > input {
    display: none;
  }
`;

export const PhotoPreview = styled.img`
  max-width: 200px;
  max-height: 120px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  padding: 8px;

  cursor: pointer;

  background: ${({theme}) => theme.colors.background};
`;

export const ButtonUploadPreview = styled(Button)`
  width: 40%;
`;
