import React, { useEffect, useCallback, useState, useRef } from 'react';
import {
  useIsFocused,
  useNavigation,
  useRoute
} from '@react-navigation/native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { useDispatch, useSelector } from 'react-redux';

import { FILTER_COMMENTS, SEND_COMMENTS } from '@/store/slices/commentSlice';

import Label from '@/components/Label';
import Header from '@/components/Header';
import TextInput from '@/components/TextInput';

import colors from '@/theme/colors';

import ListComments from './ListComments';

import defaultUserImage from '../../assets/images/6.png';

const CommentScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { goBack } = useNavigation();
  const [text, setText] = useState();
  const passwordRef = useRef(null);
  const [postUpdate, setPostUpDate] = useState(false);
  const {
    params: { id }
  } = useRoute();

  const { commentsData, isLoading, errorMessage, hasError } = useSelector(
    ({ comments }) => comments
  );

  const loadingData = useCallback(() => {
    dispatch(FILTER_COMMENTS({ id }));
  }, [dispatch, id]);

  const sendComment = () => {
    setPostUpDate(true);
    dispatch(
      SEND_COMMENTS({
        postId: id,
        name: 'ex eaque eum natus',
        email: 'Emma@joanny.ca',
        body: text,
        callBackSuccess: () => {
          setPostUpDate(false);
          setText('');
        }
      })
    );
  };

  useEffect(() => {
    loadingData();
  }, [loadingData, postUpdate]);

  const handleGoBack = () => goBack();

  const handleUsernameSubmit = () => passwordRef.current?.focus();

  return (
    <StyledContainer>
      <Header
        showBackButton
        onBackPress={handleGoBack}
        backgroundColor={colors.COLOR_WHITE}
        backButtonColor={colors.PRIMARY}
        isFocused={isFocused}
        total={commentsData.length}
      />

      {errorMessage ? (
        <Label
          textAlign='center'
          fontWeight={400}
          fontSize={12}
          marginBottom={8}
          color={colors.DANGER}
        >
          {errorMessage}
        </Label>
      ) : (
        <>
          <ListComments
            comments={commentsData}
            isLoading={isLoading}
            onRefresh={loadingData}
          />
          <StyledCommet>
            <StyledImage source={defaultUserImage} />
            <TextInput
              width={260}
              keyboardType='text'
              placeHolder='add comments...'
              onSubmitEditing={handleUsernameSubmit}
              value={text}
              onChangeText={setText}
              hasError={hasError}
            />
            <StyledTouchableOpacity onPress={sendComment}>
              <Icon name='send' size={30} />
            </StyledTouchableOpacity>
          </StyledCommet>
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 10px;
`;

const StyledCommet = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${colors.COLOR_WHITE};
`;

const StyledImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;
export default CommentScreen;
