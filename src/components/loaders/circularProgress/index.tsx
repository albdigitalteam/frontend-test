import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const Loader = () => (
  <div className='loading' data-testid='loader'>
    <CircularProgress />
  </div>
);

export default Loader;

