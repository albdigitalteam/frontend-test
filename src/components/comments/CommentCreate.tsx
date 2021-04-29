import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { addComment } from 'store/redux/actions';
import { Dialog } from 'components';
import { IComment } from 'types';

interface ICommentCreateProps {
  onClose: Function,
  id: number;
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
  const { onClose, id } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [form, setForm] = useState<IState>(state);

  const handleClose = () => {
    onClose();
  };

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
        id: id,
        name: form.name,
        email: form.email,
        body: form.body
      }
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
          />
          <TextField
            onChange={handleChange}
            error={error && !form.name}
            id="name"
            label="Título"
            type="text"
            helperText={error && !form.name ? 'Campo não pode estar vazio.' : ''}
            fullWidth
          />
          <TextField
            onChange={handleChange}
            error={error && !form.body}
            id="body"
            label="Descrição"
            type="text"
            helperText={error && !form.body ? 'Campo não pode estar vazio.' : ''}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary">
            Postar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect()(CommentCreate);
