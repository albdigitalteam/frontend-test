import { useState } from 'react';
import { connect, } from 'react-redux';
import { useSnackbar } from 'notistack';
import Badge from '@material-ui/core/Badge';
import { CardActions, IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { CommentCreate } from 'components';
import './styles.css';

const Bottom = ({ id, commentsCount }: { id: number, commentsCount: number }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenCreateCommentDialog = () => {
    if (commentsCount > 5)
      enqueueSnackbar("Você já adicionou 1 comentário");
    else
      setOpenDialog(true);
  }

  const handleCloseCreateCommentDialog = () => {
    setOpenDialog(false);
  }

  return (
    <div>
      {openDialog &&
        <CommentCreate
          id={id}
          onClose={handleCloseCreateCommentDialog}
        />
      }
      <CardActions
        classes={{
          root: 'card-actions',
        }}
        disableSpacing
      >
        <IconButton
          onClick={handleOpenCreateCommentDialog}
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
