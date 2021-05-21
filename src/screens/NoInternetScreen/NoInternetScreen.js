import React, { memo, useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import {
  useNavigation,
  useIsFocused,
  CommonActions
} from '@react-navigation/native';
import styled from 'styled-components/native';

import Label from '@/components/Label';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fonts';

import StatusBarColor from '@/config/StatusBarColor';

import { StyledContainer as StyledMainContainer } from '@/helpers/commomStyles';

import signal from '@/assets/animations/no-wifi-signal.gif';
import checkMark from '@/assets/animations/signal.json';

const NoInternetScreen = () => {
  const { dispatch } = useNavigation();
  const isFocused = useIsFocused();
  const [showModal, setShowModal] = useState(false);
  const { isConnected } = useNetInfo();

  const onTryAgain = () => {
    if (!isConnected) {
      setShowModal(true);
    } else {
      dispatch(CommonActions.goBack());
    }
  };

  return (
    <>
      <Modal
        visible={showModal}
        confirm={() => {
          setShowModal(false);
        }}
        centeredButtons
        justConfirmButton
        confirmLabel='OK'
        description='Sem conexão com a internet.'
        withAnimation
        targetAnimation={checkMark}
      />
      {isFocused && (
        <StatusBarColor
          backgroundColor={colors.COLOR_WHITE}
          isPrimaryColorDark={false}
        />
      )}
      <StyledMainContainer justifyContent='center'>
        <StyledViewImage>
          <StyledNoInternetImg source={signal} />
          <Label
            textAlign='center'
            fontSize={fontSizes.REGULAR}
            fontWeight={500}
            lineHeight={24}
            marginTop={40}
            marginBottom={44}
          >
            Ops! Sem internet
          </Label>
        </StyledViewImage>

        <StyledViewButton>
          <Button width={241} height={48} onPress={onTryAgain}>
            Tentar novamente
          </Button>
        </StyledViewButton>
      </StyledMainContainer>
    </>
  );
};

const StyledViewButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledNoInternetImg = styled.Image`
  width: 194px;
  height: 194px;
`;

const StyledViewImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default memo(NoInternetScreen);
