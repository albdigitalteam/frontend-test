import React from 'react';
import {ICreatePostDto, IPost} from '@modules/main/home/store/interfaces';
import {ReduxState} from '@interfaces/';
import {IUser} from '@modules/user/store/interfaces';
import HeaderPostContent from './header-post-content';

interface Props {
  createPost: (postDto: ICreatePostDto) => any;
  createPostStatus: ReduxState<IPost>;
  user: IUser;
}

const HeaderPostContainer = (props: Props) => {
  return <HeaderPostContent {...props} />;
};

export {HeaderPostContainer};
