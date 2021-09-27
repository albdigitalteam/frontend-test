import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styled, { useTheme } from 'styled-components/native';

import { CREATE_NEW_COMMENT } from '../store/slices/postsSlice';
import { User } from '../store/slices/usersSlice';

type Props = {
  readonly postId: number;
  readonly userLogged?: User;
  onCommentSuccess: () => void;
};

const NewComment: React.FC<Props> = ({ postId, userLogged, onCommentSuccess }) => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const {
    colors: { secondary },
  } = useTheme();

  const saveComment = () => {
    if (text.length > 0) {
      dispatch(
        CREATE_NEW_COMMENT({
          comment: {
            postId,
            email: userLogged?.email,
            name: userLogged?.name,
            body: text,
          },
        }),
      );
      setText('');
      setTimeout(() => onCommentSuccess(), 250);
    }
  };

  return (
    <StyledContainer>
      <StyledTextInput
        placeholder="Digite aqui o seu comentário"
        value={text}
        onChangeText={setText}
      />
      <Button onPress={saveComment}>
        <FAIcon name="send-o" size={25} color={secondary} />
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.55);
  elevation: 10;
  padding: 12px;
  margin-top: 18px;
  margin-bottom: 18px;
  border-radius: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 16px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export default NewComment;
