import { connect, useDispatch } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import LazyLoad from 'react-lazyload';
import { Grid, Card, CardActionArea, CardHeader, CardContent, CardActions, CardMedia, IconButton, Typography } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import { IComments } from 'types';
import { deletePost } from 'store/redux/actions';
import './styles.css';

const Post = ({ id, title, author, body, comments }: { id: number, title: string, author: string | undefined, body: string, comments: IComments }) => {
  const dispatch = useDispatch();

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
  }

  return (
    <Grid container justify='center' >
      < LazyLoad
        once={true}
        placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt='...' />}
      >
        <Card
          classes={{
            root: 'card-root',
          }}
        >
          <CardHeader
            data-testid='post-title'
            classes={{
              root: 'card-header-root',
              title: 'card-header-title',
              subheader: 'card-header-subheader',
              action: 'card-header-action',
            }}
            action={
              <>
                <IconButton aria-label='delete'
                  onClick={() => handleDeletePost(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
            title={title}
            subheader={author}
          />
          <CardActionArea>
            <CardMedia          >
              <img src={`https://picsum.photos/id/${id}/700/200`} alt='' />
            </CardMedia >
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" data-testid="post-body">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            classes={{
              root: 'card-actions',
            }}
            disableSpacing
          >
            <IconButton aria-label="add comments">
              <Badge badgeContent={comments?.length} color="primary">
                <CommentIcon />
              </Badge>
            </IconButton>
          </CardActions>
        </Card>
      </LazyLoad>
    </Grid>
  );
};

export default connect()(Post);
