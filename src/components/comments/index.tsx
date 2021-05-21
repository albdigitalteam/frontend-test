import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { CommentCreate } from 'components';
import { ordernation } from 'utils';
import { IComments, IComment } from 'types';
import './styles.css';

interface CommentsProps {
  comments: IComments;
}

const CommentsList = (props: CommentsProps) => {
  const { comments } = props;
  const commentsOrder = ordernation(comments);
  const [openDialog, setOpenDialog] = useState(false);
  const [commentIdToEdit, setCommentIdToEdit] = useState<number>();

  const handleCloseCreateCommentDialog = () => {
    setOpenDialog(false);
  }

  const onEditComment = (id: number) => {
    setOpenDialog(true);
    setCommentIdToEdit(id);
  }

  return (
    <div
      className='comments-container'
      data-testid='comments-list'
    >
      {openDialog &&
        <CommentCreate
          idEdit={Number(commentIdToEdit)}
          id={1}
          onClose={handleCloseCreateCommentDialog}
        />
      }
      {
        commentsOrder.map((comment: IComment) => (
          <List
            key={comment.id}
            classes={{
              root: 'list-root',
            }}
          >
            <ListItem
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={comment.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {comment.email}
                    </Typography>
                    — {comment.body}
                  </React.Fragment>
                }
              />
              <IconButton
                onClick={() => onEditComment(comment.id)}
              >
                <EditIcon />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
    </div>
  )
}
export default CommentsList;
