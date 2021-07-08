import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  height: 250px;
  box-shadow: -1px 1px 20px 0px #375f9b8c;
  border-radius: 15px;
  overflow: hidden;
  height: auto;
  margin-top: 30px;
`;

export const Image = styled.img`
  width: 200px;
`;

export const CardHeader = styled.div`
  padding: 10px 10px 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const CardFooter = styled.div`
  padding: 10px 10px 15px 10px;
  min-height: 70px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
`;
export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CommentsBTN = styled.button`
  background: none;
  border: none;
  margin: 10px 0;
  color: #375f9b;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const NewCommentBTN = styled(CommentsBTN)`
  margin: 10px;
  margin-bottom: 10px;
  background-color: #375f9b;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  &:hover {
    text-decoration: none;
  }
`;

export const EmptyComments = styled.div`
  width: 98%;
  margin: 0 auto;
  background-color: #375f9b12;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const RemovePostWrapper = styled.div`
  margin-left: 15px;
`;

export const RemovePostBtn = styled.button`
  color: #d7362f;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  width: 75px;
`;
