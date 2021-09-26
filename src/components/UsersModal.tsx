import React, { useMemo, useState } from 'react';
import { Modal, FlatList } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import styled, { useTheme } from 'styled-components/native';

import User from './User';

import users from '../mocks/users';

export type Props = {
  isVisible: boolean;
  onRequestClose: () => void;
};

const UsersModal: React.FC<Props> = ({ isVisible, onRequestClose }) => {
  const {
    colors: { secondary },
  } = useTheme();

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      hardwareAccelerated
      transparent
      onRequestClose={onRequestClose}>
      <StyledBackdrop>
        <StyledContainer>
          <StyledButtonContainer>
            <Button onPress={onRequestClose}>
              <MIIcon name="close" size={25} color={secondary} />
            </Button>
          </StyledButtonContainer>
          <FlatList
            data={users}
            renderItem={({ item }) => <User data={item} />}
          />
        </StyledContainer>
      </StyledBackdrop>
    </Modal>
  );
};

const StyledBackdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

const StyledContainer = styled.View`
  width: 100%;
  max-height: 80%;
  background-color: white;
  padding: 12px;
  border-radius: 10px;
`;

const StyledButtonContainer = styled.View`
  align-items: flex-end;
`;

const Button = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
`;

export default UsersModal;
