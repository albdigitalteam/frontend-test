import React, { useMemo, useState } from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
import styled, { useTheme } from 'styled-components/native';

import UsersModal from './UsersModal';

export type Props = {
  title: string;
  isOwner?: boolean;
  onDeletePost?: () => void;
  showBackButton?: boolean;
  onPressBack?: () => void;
  showUserIcon?: boolean;
};

const Header: React.FC<Props> = ({
  title,
  isOwner = false,
  onDeletePost = () => { },
  showBackButton = false,
  onPressBack = () => { },
  showUserIcon = false
}) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const {
    colors: { secondary }
  } = useTheme();

  const rightIcon = useMemo(() => {
    if (isOwner) {
      return (
        <Button onPress={onDeletePost}>
          <FAIcon name="trash-o" color={secondary} size={25} />
        </Button>
      );
    }

    if (showUserIcon) {
      return (
        <Button onPress={() => setModalVisibility(true)}>
          <FAIcon name="user-o" color={secondary} size={25} />
        </Button>
      );
    }
    return <StyledEmptyView />;
  }, [isOwner, secondary, showUserIcon]);

  return (
    <>
      <StyledContainer>
        {showBackButton ? (
          <Button onPress={onPressBack}>
            <MIIcon name="arrow-back-ios" color={secondary} size={30} />
          </Button>
        ) : (
          <StyledEmptyView />
        )}
        <StyledText>{title}</StyledText>
        {rightIcon}
      </StyledContainer>
      <UsersModal
        isVisible={modalVisibility}
        onRequestClose={() => setModalVisibility((prev) => !prev)}
      />
    </>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const StyledEmptyView = styled.View`
  width: 35px;
  height: 35px;
`;

export default Header;
