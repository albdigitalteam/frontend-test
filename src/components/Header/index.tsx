
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './styles.css';

interface HeaderProps {
  left?: boolean
}

function Header(props: HeaderProps) {
  const { left } = props;
  const history = useHistory();

  const goNewPost = () => {
    history.push('/new-post');
  }

  const goHome = () => {
    history.push('/');
  }

  return (
    <div className='page-header'>
      <header data-testid='header' className='header'>
        <div className='header-actions-start'>
          {left &&
            <span >
              <IconButton aria-label='delete'
                onClick={goHome}
              >
                <ArrowBackIcon
                  className='icons' />
              </IconButton>
            </span>
          }
        </div>
        <div className='title-container'>
          <span >
            Air Liquide Blog
            </span>
          <Button
            onClick={goNewPost}
            variant="outlined"
            color="primary"
          >
            Adicionar Post
          </Button>
        </div>
      </header>
    </div>
  )
};

export default Header;



