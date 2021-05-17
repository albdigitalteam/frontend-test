import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { addComment, editComment } from 'store/redux/actions';
import { Dialog } from 'components';
import { IComment, IComments } from 'types';

interface ICommentCreateProps {
  onClose: Function,
  id: number;
  comments: IComments;
  idEdit: number;
}

type IState = {
  email: string;
  name: string;
  body: string;
}

const state = {
  email: '',
  name: '',
  body: ''
}

function CommentCreate(props: ICommentCreateProps) {
  const { onClose, id, comments, idEdit } = props;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [comment, setComment] = useState<IComment>();
  const [form, setForm] = useState<IState>(state);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const commentToEdit = comments?.find((comment: IComment) => comment.id === idEdit);
    setComment(commentToEdit);
  }, [idEdit, comments]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
    setError(false);
  };

  const onSubmit = () => {
    if (!form.email || !form.body || !form.name)
      setError(true);
    else {
      const comment: IComment = {
        postId: id,
        id: idEdit,
        name: form.name,
        email: form.email,
        body: form.body
      }
      if (idEdit){        
        dispatch(editComment(comment))
      }
      else
        dispatch(addComment(comment))
      handleClose()
      enqueueSnackbar('Comentário foi adicionado');
    }
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        title='Adicionar Comentário'
      >
        <DialogContent>
          <TextField
            onChange={handleChange}
            error={error && !form.email}
            id="email"
            label="Email"
            type="email"
            helperText={error && !form.email ? 'Campo não pode estar vazio.' : ''}
            fullWidth
            defaultValue={comment?.email}
          />
          <TextField
            onChange={handleChange}
            error={error && !form.name}
            id="name"
            label="Título"
            type="text"
            helperText={error && !form.name ? 'Campo não pode estar vazio.' : ''}
            fullWidth
            defaultValue={comment?.name}
          />
          <TextField
            onChange={handleChange}
            error={error && !form.body}
            id="body"
            label="Descrição"
            type="text"
            helperText={error && !form.body ? 'Campo não pode estar vazio.' : ''}
            fullWidth
            defaultValue={comment?.body}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={onSubmit}
            color="primary"
            type='submit'
            data-testid='submit-button'
          >
            Postar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



const mapStateToProps = ({ comments }: { comments: IComments }) => ({
  comments,
});

export default connect(mapStateToProps)(CommentCreate);


