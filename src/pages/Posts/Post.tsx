import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, } from '@material-ui/core';
import PostHeader from './PostHeader';
import PostBottom from './PostBottom';
import { IComments } from 'types';
import './styles.css';

const Post = ({ id, title, author, body, comments }: { id: number, title: string, author: string | undefined, body: string, comments: IComments }) => {

  const history = useHistory();

  const detailsPost = (postId: number) => {
    history.push(`/details/${postId}`)
  }

  return (
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
        <CardActionArea
          onClick={() => detailsPost(id)}
        >
          < LazyLoad
            once={true}
            placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt='...' />}
          >
            <CardMedia          >
              <img src={`https://picsum.photos/id/${id}/700/200`} alt='' />
            </CardMedia >
          </LazyLoad>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" data-testid="post-body">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <PostBottom
          id={id}
          commentsCount={comments?.length}
        />
      </Card>
    </Grid>
  );
};

export default connect()(Post);
