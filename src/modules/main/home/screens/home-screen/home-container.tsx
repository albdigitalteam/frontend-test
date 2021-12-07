import React, {useEffect} from 'react';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import {IPost} from '../../store/interfaces';
import {ReduxState} from '../../../../../interfaces';
import {HomeContent} from './home-content';

interface Props {
  postsStatus: ReduxState<IPost[]>;
  posts: IPost[] | null | undefined;
  getPosts: () => any;
}

const HomeContainer = (props: Props) => {
  const navigation = useNavigation();

  const navigate = (routeName: string) => {
    navigation.navigate(routeName as any);
  };

  useEffect(() => {
    props.getPosts();
  }, []);

  return <HomeContent navigate={navigate} {...props} />;
};

export {HomeContainer};
