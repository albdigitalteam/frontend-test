import React, {useEffect} from 'react';
import {IPost} from '../../store/interfaces';
import {ReduxState} from '@interfaces/';
import {HomeContent} from './home-content';

interface Props {
  postsStatus: ReduxState<IPost[]>;
  posts: IPost[] | null | undefined;
  getPosts: () => any;
}

const HomeContainer = (props: Props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  return <HomeContent {...props} />;
};

export {HomeContainer};
