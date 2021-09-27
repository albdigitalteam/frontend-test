import React, { useState } from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components/native';

import { User } from '../store/slices/usersSlice';
import { CREATE_NEW_POST } from '../store/slices/postsSlice';

type Props = {
  userLogged?: User;
};

const NewPost: React.FC<Props> = ({ userLogged }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const {
    colors: { secondary },
  } = useTheme();
  const dispatch = useDispatch();

  const savePost = () => {
    if (title.length > 0 && body.length > 0) {
      dispatch(CREATE_NEW_POST({ post: { userId: userLogged?.id, title, body } }));
      setBody('');
      setTitle('');
    }
  };

  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTextInput
          placeholder="Digite aqui o titulo..."
          value={title}
          onChangeText={setTitle}
        />
        <Button onPress={savePost}>
          <FAIcon name="send-o" size={25} color={secondary} />
        </Button>
      </StyledTitleContainer>
      {title.trim().length > 0 && (
        <StyledInput
          placeholder="Digite o seu texto aqui..."
          value={body}
          onChangeText={setBody}
        />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.primary};
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.55);
  elevation: 10;
  margin: 0 12px;
  padding: 10px 12px 10px;
  border-radius: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

const StyledInput = styled.TextInput`
  margin-top: 8px;
  font-size: 16px;
`;

const StyledTitleContainer = styled.View`
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export default NewPost;
