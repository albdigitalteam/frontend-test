import React, { useState } from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styled, { useTheme } from 'styled-components/native';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const {
    colors: { secondary },
  } = useTheme();
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTextInput
          placeholder="Digite aqui o titulo..."
          value={title}
          onChangeText={setTitle}
        />
        <Button>
          <FAIcon name="send-o" size={25} color={secondary} />
        </Button>
      </StyledTitleContainer>
      {title.trim().length > 0 && (
        <StyledInput placeholder="Digite o seu texto aqui..." />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.primary};
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.15);
  margin: 0 12px 16px;
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
