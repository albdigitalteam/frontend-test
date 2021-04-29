import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { CardActions, IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import {CommentCreate} from 'components';
import { deletePost } from 'store/redux/actions';
import './styles.css';

const Bottom = ({ id, commentsCount }: { id: number, commentsCount: number }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

  const detailsPost = (postId: number) => {
    history.push(`/details/${postId}`)
  }

  return (
    <div>
    <CardActions
      classes={{
        root: 'card-actions',
      }}
      disableSpacing
    >
      <IconButton
        onClick={handleOpenDialog}
      >
        <Badge badgeContent={commentsCount} color="primary">
          <CommentIcon />
        </Badge>
      </IconButton>
    </CardActions>
    </div>
  );
};

export default connect()(Bottom);
