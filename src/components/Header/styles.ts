import styled from 'styled-components';

export const Container = styled.header`
  height: 48px;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`;

export const DivContent = styled.div`
  line-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  box-shadow: 2px rgba(0, 0, 1, 1);
`;

export const DivAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }
  input {
    width: 220px;
    border: 1px solid #e6ecf0;
    padding: 0 30px 0 30px;
    background: url(/images/search.svg) no-repeat 190px center;
    font-size: 12px;
    color: #687b8a;
  }
`;

export const ButtonTweet = styled.button`
  width: 72px;
  height: 32px;
  border-radius: 100px;
  background-color: #1da1f2;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.01px;
  line-height: 3px;
  border: 0;
`;
