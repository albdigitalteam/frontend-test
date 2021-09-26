import React from 'react';
import {
  Container, Content, UserImage, UserName, UserEmail,
} from './styles';

interface UserDetailProps {
    picture: string;
    name: string;
    email: string;
}

export function UserDetail({ picture, name, email }: UserDetailProps) {
  // console.log('aaaa', picture, name, email);
  // const pic = `../../assets/images/${picture}.jpeg`;
  // console.log('aaaa', pic);
  return (
    <Container>
      <UserImage source={{ uri: `${picture}` }} />
      {/* <UserImage source={pic} /> */}
      {/* <UserImage source={{ uri: `${pic}` }} /> */}
      {/* <UserImage source={aux} /> */}
      {/* <UserImage source={require('../../assets/images/1.jpeg')} /> */}
      {/* <UserImage source={{ uri: `../../assets/images/${picture}.jpeg` }} /> */}
      <Content>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </Content>
    </Container>
  );
}

// import React from 'react';
// import {
//   Container, Content, UserImage, UserName, UserEmail,
// } from './styles';

// interface UserDetailProps {
//     picture: string;
//     name: {first: string; last: string;};
//     email: string;
// }

// export function UserDetail({ picture, name, email }: UserDetailProps) {
//   console.log('aaaa', picture, name, email);
//   return (
//     <Container>
//       <UserImage source={{ uri: `${picture}` }} />
//       <Content>
//         <UserName>{`${name.first} ${name.last}`}</UserName>
//         <UserEmail>{email}</UserEmail>
//       </Content>
//     </Container>
//   );
// }
