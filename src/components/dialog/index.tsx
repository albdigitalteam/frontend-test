import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

interface DialogProps {
  open: boolean,
  title: string,
  onClose: Function,
  children: any
}

export default function FormDialog(props: DialogProps) {
  const { open, onClose, title, children } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth='sm'
    >
      <DialogTitle >
        {title}
      </DialogTitle>
      {children}
    </Dialog>
  );
}