import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './styles.css';

const PostBody = ({ id, body }: { id: number, body: string }) => {
  const history = useHistory();

  const detailsPost = (postId: number) => {
    history.push(`/details/${postId}`)
  }

  return (
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
  );
};

export default connect()(PostBody);
