import { connect, useDispatch } from 'react-redux';
import { CardHeader, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost } from 'store/redux/actions';
import './styles.css';

const PostHeader = ({ id, title, author }: { id: number, title: string, author: string | undefined}) => {
  const dispatch = useDispatch();

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
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
