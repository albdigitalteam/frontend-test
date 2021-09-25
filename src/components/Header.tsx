import React, { useMemo } from 'react';
import { View } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export type Props = {
  title: string;
  isOwner?: boolean;
  showBackButton?: boolean;
};

const Hello: React.FC<Props> = ({
  title,
  isOwner = false,
  showBackButton = false,
}) => {
  const rightIcon = useMemo(
    () =>
      isOwner ? (
        <Button>
          <FAIcon name="trash-o" size={30} color="#900" />
        </Button>
      ) : (
        <Button>
          <FAIcon name="user-o" size={30} />
        </Button>
      ),
    [isOwner],
  );

  return (
    <StyledContainer>
      {showBackButton ? (
        <MIIcon name="arrow-back-ios" size={30} color="#900" />
      ) : (
        <View />
      )}
      <StyledText>{title}</StyledText>
      {rightIcon}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export default Hello;
