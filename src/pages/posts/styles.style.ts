import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme}) => theme.colors.primary};
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  background: ${({theme}) => theme.colors.primary};
  margin-top: 12px;
`;

export const PostContainer = styled.div`
  width: 800px;
`;
