import { connect, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { CardHeader, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost } from 'store/redux/actions';
import './styles.css';

const PostHeader = ({ id, title, author }: { id: number, title: string, author: string | undefined }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
    if (location.pathname !== '/')
      history.push('/');
  }

  return (
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
  );
};

export default connect()(PostHeader);
