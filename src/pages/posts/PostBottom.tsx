import { connect, useDispatch,useState } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { CardActions, IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { deletePost } from 'store/redux/actions';
import './styles.css';

const Bottom = ({ id, commentsCount }: { id: number, commentsCount: number }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
  }

  const detailsPost = (postId: number) => {
    history.push(`/details/${postId}`)
  }

  return (
    <CardActions
      classes={{
        root: 'card-actions',
      }}
      disableSpacing
    >
      <IconButton>
        <Badge badgeContent={commentsCount} color="primary">
          <CommentIcon />
        </Badge>
      </IconButton>
    </CardActions>
  );
};

export default connect()(Bottom);
