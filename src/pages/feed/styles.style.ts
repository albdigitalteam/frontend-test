import styled from 'styled-components';

import Textarea from '../../components/textarea/index.component';
import Button from '../../components/button/index.component';

export const Container = styled.div`
  background: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NewPostContainer = styled.div`
  background-color: #242526;
  padding: 16px;
  margin-bottom: 12px;

  @media (min-width: 760px) {
    border-radius: 10px;
  }
`;

export const NewPostTextarea = styled(Textarea)``;

export const NewPostButton = styled(Button)`
  width: 100%;
`;

export const FeedContainer = styled.div`
    max-width: 800px;
`;
