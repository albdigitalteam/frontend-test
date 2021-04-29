import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { addPost } from 'store/redux/actions';
import { Dialog } from 'components';
import { IPost, IUser, IUsers } from 'types'

interface IPostCreateProps {
  onClose: Function,
  users?: IUsers;
}

type IState = {
  email: string;
  title: string;
  body: string;
}

const state = {
  email: '',
  title: '',
  body: ''
}

function PostCreate(props: IPostCreateProps) {
  const { onClose, users } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [form, setForm] = useState<IState>(state);

  const handleClose = () => {
    onClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("name ", event.target)
    const { id, value } = event.target;

    setForm({ ...form, [id]: value });
    setError(false);
  };

  const onSubmit = () => {
    if (!form.email || !form.body || !form.title)
      setError(true);
    else {   
      const user = users?.find((user: IUser) => user.email.toLowerCase() === form.email.toLowerCase())
      console.log("userId ", user);
      if (user) {
        const post: IPost = {
          userId: user.id,
          id: user.id,
          title: form.title,
          body: form.body
        }
        dispatch(addPost(post))
        handleClose()
      }
      else
        enqueueSnackbar('E-mail não encontrado, por favor digite um e-mail existente.');
    }
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        title='Adicionar Post'
      >
        <DialogContent>
          <TextField
            onChange={handleChange}
            error={error && !form.email}
            id="email"
            label="Email"
            type="email"
            helperText={error && !form.email ? 'Necessário preencher com um e-mail existente.' : ''}
            fullWidth
          />
          <TextField
            onChange={handleChange}
            error={error && !form.title}
            id="title"
            label="Título"
            type="text"
            helperText={error && !form.title ? 'Campo não pode estar vazio.' : ''}
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

const mapStateToProps = ({ users }: { users: IUsers }) => ({
  users
});

export default connect(mapStateToProps)(PostCreate);
