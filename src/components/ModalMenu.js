import React, { memo } from 'react';
import { Modal as NativeModal } from 'react-native';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Label from '@/components/Label';
import Line from '@/components/Line';

import colors from '@/theme/colors';

const ModalMenu = ({ visible, title, onRequestClose }) => {
  return (
    <NativeModal
      transparent
      animationType='slide'
      statusBarTranslucent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <StyledView>
        <StyledContainer>
          {title && (
            <Label color={colors.DARK_TEXT} marginBottom={16} fontWeight={600}>
              {title}
            </Label>
          )}
          <Line marginTop={18} />
        </StyledContainer>
      </StyledView>
    </NativeModal>
  );
};

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

ModalMenu.defaultProps = {
  onRequestClose: () => {},
  title: undefined,
  visible: false
};

ModalMenu.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onRequestClose: PropTypes.func
};

export default memo(ModalMenu);
