import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000db;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  display: block;
  position: absolute;
  top: -35px;
  right: 2px;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 25px;
  color: #8a8180;
  @media (min-width: 992px) {
    top: -40px;
    right: -50px;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
`;

export const ProgramTitle = styled.h4`
  font-size: 28px;
  display: block;
  color: #fff;
  padding-left: 5%;
  @media (min-width: 992px) {
    margin-bottom: -15px;
    padding-left: initial;
  }
`;
export const Video = styled.video`
  width: 90%;
  margin: 0 auto;
  display: block;
  @media (min-width: 992px) {
    width: 808px;
    height: 509px;
  }
`;
export const Source = styled.source``;
