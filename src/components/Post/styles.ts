import styled from 'styled-components';

export const Container = styled.section`
  width: 55%;
  background: #ffffff;
  padding: 20px;
  margin-top: 12px;
  color: #444;
  display: flex;
  flex-direction: column;
`;

export const PostContent = styled.div`
  border-top: 1px solid #666;
  display: flex;
  flex-direction: column;
  strong {
    font-weight: bold;
  }
  p {
    margin-top: 10px;
  }
`;
