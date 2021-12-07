import React from 'react';
import {ReduxState} from '@interfaces/';
import {IComment} from '../../store/interfaces';
import {Comment, NewComment, Skeleton} from '@components/';
import {Container} from './styles';
import {FlatList} from 'react-native';

interface Props {
  commentsStatus: ReduxState<IComment[]>;
  comments: IComment[] | null | undefined;
  postId: number;
}

const CommentsContent = (props: Props) => {
  const renderItem = ({item}: {item: IComment}) => <Comment comment={item} />;

  return (
    <Container>
      {props.commentsStatus.isDone && (
        <FlatList
          keyExtractor={comment => `${comment.id}`}
          renderItem={renderItem}
          data={props.comments}
        />
      )}
      <NewComment postId={props.postId} />
      {props.commentsStatus.isDoing && <Skeleton amount={5} />}
    </Container>
  );
};

export {CommentsContent};
