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
export const NewPostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 59, 60);
  border-radius: 5px;
  button {
    width: 220px;
  }
`;

export const PostContent = styled.div`
  padding: 5px 0;
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

export const TitleExcludeButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    cursor: pointer;
    font-size: 12px;
    color: #f35;
    font-weight: bold;
  }
`;
