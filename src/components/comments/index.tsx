import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IComments, IComment } from 'types';
import './styles.css';

interface CommentsProps {
  comments: IComments;
}

const CommentsList = (props: CommentsProps) => {
  const { comments } = props;
  return (
    <div className='comments-container'>
      { comments.length &&
        comments.map((comment: IComment) => (
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
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
    </div>
  )
}
export default CommentsList;
