import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0 auto;
  display: flex;
  list-style: none;
  height: 100%;
  align-items: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    font-size: 12px;
    color: #788a;
    height: 100%;
    position: relative;
  }

  li.active:after {
    content: '';
    background: #1da1f2;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  li.active {
    strong {
      color: #1da1f2;
    }
  }
`;
