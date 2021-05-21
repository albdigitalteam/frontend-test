import { Grid, Card } from '@material-ui/core';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostBottom from './PostBottom';
import { IComments } from 'types';
import './styles.css';

const Post = ({ id, title, author, body, comments }: { id: number, title: string, author: string | undefined, body: string, comments: IComments }) => (
  <Grid container justify='center' >
    <Card
      classes={{
        root: 'card-root',
      }}
    >
      <PostHeader
        id={id}
        title={title}
        author={author}
      />
      <PostBody
        id={id}
        body={body}
      />
      <PostBottom
        id={id}
        commentsCount={comments?.length}
      />
    </Card>
  </Grid>
);

export default Post;
