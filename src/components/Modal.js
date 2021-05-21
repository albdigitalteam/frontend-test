import React, { memo } from 'react';
import { Modal as NativeModal } from 'react-native';
import Lottie from 'lottie-react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Label from '@/components/Label';
import Line from '@/components/Line';

import colors from '@/theme/colors';

const Modal = ({
  visible,
  title,
  description,
  cancel,
  confirm,
  cancelLabel,
  confirmLabel,
  justConfirmButton,
  centeredButtons,
  onRequestClose,
  withAnimation,
  targetAnimation
}) => {
  return (
    <NativeModal
      transparent
      animationType='fade'
      statusBarTranslucent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <StyledView>
        <StyledContainer>
          {withAnimation && (
            <StyledCheckMark source={targetAnimation} autoPlay loop />
          )}
          {title && (
            <Label color={colors.DARK_TEXT} marginBottom={16} fontWeight={600}>
              {title}
            </Label>
          )}
          <Label
            textAlign='center'
            fontWeight={400}
            fontSize={16}
            color={!title ? colors.DARK_TEXT : undefined}
          >
            {description}
          </Label>
          <Line marginTop={18} />
          <StyledButtonContainer
            justifyContent={centeredButtons ? 'center' : 'flex-end'}
          >
            {!justConfirmButton && (
              <StyledButton onPress={cancel} flex={centeredButtons && 1}>
                <Label
                  fontSize={14}
                  textAlign='center'
                  color={colors.ACTION_SUCCESS}
                >
                  {cancelLabel}
                </Label>
              </StyledButton>
            )}
            {centeredButtons && !justConfirmButton && <StyledButtonSeparator />}
            <StyledButton onPress={confirm} flex={centeredButtons && 1}>
              <Label
                fontSize={14}
                textAlign='center'
                color={colors.ACTION_SUCCESS}
              >
                {confirmLabel}
              </Label>
            </StyledButton>
          </StyledButtonContainer>
        </StyledContainer>
      </StyledView>
    </NativeModal>
  );
};

const StyledButton = styled.TouchableOpacity`
  min-width: 55px;
  flex: ${({ flex }) => flex || 'none'};
  height: 40px;
  justify-content: center;
  align-content: center;
  margin-right: ${props => props.marginRight || 0}px;
`;

const StyledButtonSeparator = styled.View`
  height: 30px;
  width: 1px;
  align-self: center;
  background-color: ${colors.LINE};
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKDROP};
`;

const StyledContainer = styled.View`
  width: 300px;
  justify-content: center;
  align-items: center;
  padding: 25px 21px 6px 21px;
  border-radius: 16px;
  background-color: ${colors.COLOR_WHITE};
`;

const StyledButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: flex-end;
  margin-top: 4px;
`;

const StyledCheckMark = styled(Lottie)`
  height: 85px;
  width: 85px;
  margin-bottom: 16px;
`;

Modal.defaultProps = {
  cancel: () => {},
  cancelLabel: 'Não',
  confirmLabel: 'Sim',
  justConfirmButton: false,
  centeredButtons: false,
  onRequestClose: () => {},
  confirm: () => {},
  title: undefined,
  withAnimation: false,
  targetAnimation: '',
  visible: false
};

Modal.propTypes = {
  centeredButtons: PropTypes.bool,
  visible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  cancel: PropTypes.func,
  confirm: PropTypes.func,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  justConfirmButton: PropTypes.bool,
  onRequestClose: PropTypes.func,
  withAnimation: PropTypes.bool,
  targetAnimation: PropTypes.node
};

export default memo(Modal);
