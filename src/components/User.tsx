import React from 'react';
import styled from 'styled-components/native';

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Props = {
  data: UserProps;
};

interface ContainerProps {
  isLogged: boolean;
}

const User: React.FC<Props> = ({ data }) => {
  return (
    <StyledContainer isLogged>
      <StyledText>{data.name}</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  margin: 4px 0;
  border-radius: 8px;
  background-color: ${({ theme: { colors }, isLogged }) =>
    isLogged ? colors.secondary : 'white'};
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default User;
