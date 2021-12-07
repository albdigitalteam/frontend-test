import React, {useState, memo} from 'react';
import {IPost} from '@modules/posts/store/interfaces';
import {IUser} from '@modules/user/store/interfaces';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon, Avatar, SpeedDial} from 'react-native-elements';
import Tooltip from 'react-native-walkthrough-tooltip';
import Skeleton from '../Skeleton';
import {
  Container,
  HeaderContainer,
  AvatarContainer,
  TitleContainer,
  NameText,
  EmailText,
  IconMenuContainer,
  TitleText,
  ContentText,
  ContentContainer,
  BottomContainer,
  SocialIconContainer,
  SocialIconText,
} from './styles';

interface Props {
  post: IPost;
  author: IUser | undefined;
  navigate: (routeName: string, {postId}: {postId: number}) => void;
  deletePost: (poustId: number) => Promise<any>;
}

const PostContent = memo((props: Props) => {
  const [dialOpened, setDialOpened] = useState<boolean>(false);

  return props.author ? (
    <Container>
      <HeaderContainer>
        <AvatarContainer>
          <Avatar
            rounded
            source={{
              uri: 'https://media.istockphoto.com/photos/back-view-of-traveler-woman-walking-in-forest-picture-id1264486309',
            }}
          />
        </AvatarContainer>
        <TitleContainer>
          <NameText>{props.author.name}</NameText>
          <EmailText>{props.author.email}</EmailText>
        </TitleContainer>
        <IconMenuContainer>
          <Tooltip
            isVisible={dialOpened}
            content={
              <Icon
                onPress={() => props.deletePost(props.post.id)}
                size={18}
                tvParallaxProperties={undefined}
                name={'trash-alt'}
                type={'font-awesome-5'}
                color={'red'}
              />
            }
            placement="bottom"
            backgroundColor={'transparent'}
            onClose={() => setDialOpened(false)}>
            <Icon
              onPress={() => setDialOpened(true)}
              color={'#7f899b'}
              name="ellipsis-h"
              size={18}
              type={'font-awesome-5'}
              tvParallaxProperties={undefined}
            />
          </Tooltip>
        </IconMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        <TitleText>{props.post.title}</TitleText>
        <ContentText>{props.post.body}</ContentText>
      </ContentContainer>
      <BottomContainer>
        <SocialIconContainer>
          <Icon
            onPress={() => {}}
            color={'#ff3d71'}
            tvParallaxProperties={undefined}
            type={'font-awesome'}
            name={'heart'}
            containerStyle={{marginRight: 8}}
          />
          <SocialIconText>4</SocialIconText>
        </SocialIconContainer>
        <SocialIconContainer>
          <Icon
            onPress={() =>
              props.navigate('CommentsScreen', {
                postId: props.post.id,
              })
            }
            size={24}
            color={'#cbd3e3'}
            tvParallaxProperties={undefined}
            type={'font-awesome-5'}
            name={'comment-dots'}
            containerStyle={{marginRight: 8}}
          />
          <SocialIconText>4</SocialIconText>
        </SocialIconContainer>
      </BottomContainer>
    </Container>
  ) : (
    <Skeleton amount={2} />
  );
});

export {PostContent};
