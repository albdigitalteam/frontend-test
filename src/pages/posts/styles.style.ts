import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 12px;
`;

export const PostContainer = styled.div`
  max-width: 800px;
`;
